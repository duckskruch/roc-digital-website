// Simple utility function for combining classes
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Utility function for conditional classes
export function conditionalClass(condition: boolean, trueClass: string, falseClass: string = '') {
  return condition ? trueClass : falseClass;
}

// Utility function for responsive classes
export function responsiveClass(baseClass: string, mobileClass?: string, tabletClass?: string, desktopClass?: string) {
  let classes = baseClass;
  if (mobileClass) classes += ` ${mobileClass}`;
  if (tabletClass) classes += ` ${tabletClass}`;
  if (desktopClass) classes += ` ${desktopClass}`;
  return classes;
}
