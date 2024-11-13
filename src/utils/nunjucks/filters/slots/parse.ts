export default function (root: HTMLElement | null) {
  if (!root) return {};

  return {
    default: Array.from(root.querySelectorAll(':scope > :not([slot])'))
      .map((el) => el.outerHTML)
      .join(''),
    ...Array.from(root.querySelectorAll(':scope > [slot]')).reduce(
      (acc, el) => {
        const slotName = el.getAttribute('slot');
        if (slotName) {
          acc[slotName] = el.outerHTML;
        }
        return acc;
      },
      {} as Record<string, string>,
    ),
  };
}
