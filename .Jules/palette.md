## 2025-02-14 - Aria Labels for Icon Buttons
**Learning:** Found missing aria labels on icon-only buttons which makes screen readers read them only as "button" instead of their intended actions. Adding `aria-label` provides a simple fix to significantly improve accessibility.
**Action:** When adding or auditing icon-only buttons in the UI, verify that an `aria-label` is present to guarantee a fully accessible experience.
