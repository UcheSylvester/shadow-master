const validUnits = ["px", "em", "rem"];

const validateSpacing = (spacing) => {
  if (!spacing) return;

  if (typeof spacing === "number") return `${spacing}px`;

  if (
    typeof spacing === "string" &&
    validUnits.find((unit) => spacing.endsWith(unit))
  )
    return spacing;

  return;
};

function shadowMaster(options = {}) {
  let { selector = ".shadow-master", shadowType = "soft", margin, padding } =
    options || {};

  let items = Array.from(document.querySelectorAll(selector));

  if (shadowType === "hard") shadowType = "0px";
  else shadowType = "15px";

  items.forEach((item) => {
    item.style.boxShadow = `10px 10px ${shadowType} 1px rgba(0, 0,0, 0.12)`;

    if (margin && validateSpacing(margin)) {
      item.style.margin = margin;
    }

    if (margin && validateSpacing(padding)) {
      item.style.padding = padding;
    }
  });
}

module.exports.shadowMaster = shadowMaster;
