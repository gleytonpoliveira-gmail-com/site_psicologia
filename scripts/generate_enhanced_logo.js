import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateEnhancedLogos() {
  console.log('Starting enhanced logo generation...');

  const brainPath = 'public/assets/aistudio/gemini_brain_transparent.png';
  if (!fs.existsSync(brainPath)) {
    throw new Error('Brain icon not found at ' + brainPath);
  }

  // 1. Prepare Brain Icon at 340x340 px with perfect alpha
  const brainBuffer = await sharp(brainPath)
    .resize(340, 340, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const brainBase64 = brainBuffer.toString('base64');

  // Let's create an ultra-crisp SVG for the badge
  // Dimensions: 1560 x 480 px (3.25 : 1 ratio)
  // Left padding: 60px, Brain: 340px, Gap: 60px -> Text starts at x = 460
  // Text area width: 1040px, Total width: 1560px
  
  const width = 1560;
  const height = 480;

  // CRP text: In the user's Canva logo and screenshot, it displays "PSICÓLOGA CLÍNICA | CRP 21/8775"
  // (with bold, highly visible weight so it is crystal clear)
  const svgBadge = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="badge-shadow" x="-5%" y="-10%" width="110%" height="130%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#0f2b48" flood-opacity="0.08" />
        <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#0f2b48" flood-opacity="0.04" />
      </filter>
      <linearGradient id="divider-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#3a82bf" />
        <stop offset="100%" stop-color="#4a90e2" />
      </linearGradient>
    </defs>

    <!-- White Card Background with Rounded Corners -->
    <rect x="12" y="12" width="1380" height="${height - 24}" rx="40" ry="40" fill="#FFFFFF" stroke="#e2e8f0" stroke-width="2.5" filter="url(#badge-shadow)" />

    <!-- Brain Icon embedded as high-res PNG -->
    <image href="data:image/png;base64,${brainBase64}" x="55" y="70" width="340" height="340" />

    <!-- Typography Block -->
    <!-- Line 1: ANDRÉIA (Commanding Elegant Serif) -->
    <text x="445" y="190" 
          font-family="'Playfair Display', 'DejaVu Serif', 'Georgia', serif" 
          font-size="130" 
          font-weight="900" 
          letter-spacing="0.03em" 
          fill="#0a2540">ANDRÉIA</text>

    <!-- Line 2: FRANCISCA DO NASCIMENTO (Strong Bold Sans-Serif) -->
    <text x="447" y="278" 
          font-family="'Plus Jakarta Sans', 'Inter', 'DejaVu Sans', sans-serif" 
          font-size="44" 
          font-weight="800" 
          letter-spacing="0.08em" 
          fill="#0a2540">FRANCISCA DO NASCIMENTO</text>

    <!-- Line 3: Solid Royal Blue Divider - perfectly aligned with text width -->
    <rect x="447" y="316" width="875" height="5" rx="2.5" fill="url(#divider-grad)" />

    <!-- Line 4: PSICÓLOGA CLÍNICA | CRP 21/8775 (Extra-Bold, High-Visibility) -->
    <text x="447" y="380" 
          font-family="'Plus Jakarta Sans', 'Inter', 'DejaVu Sans', sans-serif" 
          font-size="36" 
          font-weight="800" 
          letter-spacing="0.09em" 
          fill="#0a2540">
      <tspan fill="#0a2540">PSICÓLOGA CLÍNICA</tspan>
      <tspan fill="#3a82bf" font-weight="900" dx="20">|</tspan>
      <tspan fill="#0a2540" dx="20">CRP 21/8775</tspan>
    </text>
  </svg>
  `;

  // Transparent variant (without the outer white card rect)
  const svgTransparent = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="divider-grad-trans" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#3a82bf" />
        <stop offset="100%" stop-color="#4a90e2" />
      </linearGradient>
    </defs>

    <!-- Brain Icon embedded as high-res PNG -->
    <image href="data:image/png;base64,${brainBase64}" x="55" y="70" width="340" height="340" />

    <!-- Typography Block -->
    <text x="445" y="190" 
          font-family="'Playfair Display', 'DejaVu Serif', 'Georgia', serif" 
          font-size="130" 
          font-weight="900" 
          letter-spacing="0.03em" 
          fill="#0a2540">ANDRÉIA</text>

    <text x="447" y="278" 
          font-family="'Plus Jakarta Sans', 'Inter', 'DejaVu Sans', sans-serif" 
          font-size="44" 
          font-weight="800" 
          letter-spacing="0.08em" 
          fill="#0a2540">FRANCISCA DO NASCIMENTO</text>

    <rect x="447" y="316" width="875" height="5" rx="2.5" fill="url(#divider-grad-trans)" />

    <text x="447" y="380" 
          font-family="'Plus Jakarta Sans', 'Inter', 'DejaVu Sans', sans-serif" 
          font-size="36" 
          font-weight="800" 
          letter-spacing="0.09em" 
          fill="#0a2540">
      <tspan fill="#0a2540">PSICÓLOGA CLÍNICA</tspan>
      <tspan fill="#3a82bf" font-weight="900" dx="20">|</tspan>
      <tspan fill="#0a2540" dx="20">CRP 21/8775</tspan>
    </text>
  </svg>
  `;

  // Output paths
  const outputDir = 'public/assets/aistudio';

  // 1. Render Badge PNG & WEBP
  const badgeBuffer = Buffer.from(svgBadge);
  await sharp(badgeBuffer)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'logo_aprimorado_badge_hd.png'));
  console.log('Generated logo_aprimorado_badge_hd.png');

  await sharp(badgeBuffer)
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(outputDir, 'logo_aprimorado_badge_hd.webp'));
  console.log('Generated logo_aprimorado_badge_hd.webp');

  // 2. Render Transparent trimmed PNG & WEBP
  const transBuffer = Buffer.from(svgTransparent);
  const trimmed = await sharp(transBuffer)
    .trim({ threshold: 5 })
    .png({ quality: 100 })
    .toBuffer();

  await sharp(trimmed).toFile(path.join(outputDir, 'logo_aprimorado_trimmed_hd.png'));
  console.log('Generated logo_aprimorado_trimmed_hd.png');

  await sharp(trimmed)
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(outputDir, 'logo_aprimorado_trimmed_hd.webp'));
  console.log('Generated logo_aprimorado_trimmed_hd.webp');

  // Overwrite existing logo files used across the app so all instances update to high resolution
  await sharp(badgeBuffer)
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(outputDir, 'logo_aprimorado.webp'));

  await sharp(trimmed)
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(outputDir, 'logo_aprimorado_trimmed.webp'));

  await sharp(trimmed)
    .png({ quality: 100 })
    .toFile(path.join(outputDir, 'logo_aprimorado_trimmed.png'));

  console.log('All enhanced logo assets generated successfully!');
}

generateEnhancedLogos().catch(err => {
  console.error('Error generating logos:', err);
  process.exit(1);
});
