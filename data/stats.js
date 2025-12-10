const STAT_ICONS=
{
    "AD": "/assets/ux/staticons/AD.svg",
  "AP": "/assets/ux/staticons/AP.svg",
}
function formatstats(text) 
{
  if (!text) return "";
  text = text.replace(/\[AD\]/g, `<img src="${STAT_ICONS.AD}" class="inline-icon">`);
  
  text = text.replace(/\[AP\]/g, `<img src="${STAT_ICONS.AP}" class="inline-icon">`);
  return text;
}