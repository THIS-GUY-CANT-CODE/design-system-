This is a DESIGN SYSTEM DOCUMENTATION SITE. Its purpose is to visually display every component in every state, variant, and size — laid out statically on the page with clear labels and descriptions. NOT interactive demos. Think of it like a Storybook docs page or the shadcn/ui documentation site.

FIRST: Delete ALL product pages. Delete every file in src/pages/ (DeploymentsPage, UsersPage, MonitoringPage, DataVolumesPage, CreateDataVolumePage, ImportFilePage, NotFoundPage). Remove them from routes. The sidebar should ONLY contain: Design Tokens, Atoms, Molecules, Organisms, Templates.

LAYOUT FOR EVERY COMPONENT SECTION:
Each component gets a documentation block structured exactly like this:
1. Component name as a heading (e.g. "Button")
2. A short description of what the component is and when to use it
3. A "Props" table showing: prop name, type, default value, and description
4. Multiple labeled subsections showing every visual state rendered statically side by side

Use a consistent layout pattern: a light gray container card for each component, with sub-sections inside separated by labels in small muted text above each row of variants.

ATOMS SHOWCASE must display these components with ALL states shown statically:

Button —
  Variants row: Default, Secondary, Destructive, Outline, Ghost, Link (all rendered side by side with labels underneath each)
  Sizes row: sm, default, lg, icon (all rendered side by side)
  States row: Default, Hover, Focus, Disabled, Loading (with spinner icon)
  With Icon row: Icon Left, Icon Right, Icon Only
  Props table: variant, size, disabled, asChild

Input —
  States row: Empty, With Placeholder, Filled, Focused, Disabled, Error, Read Only
  Sizes row: sm, default, lg
  With Addons row: With Left Icon, With Right Icon, With Prefix Text, With Suffix Text
  Props table: type, placeholder, disabled, value, onChange

Textarea —
  States row: Empty, With Placeholder, Filled, Focused, Disabled, Error
  Props table: placeholder, disabled, rows, maxLength

Label —
  States row: Default, Required (with asterisk), Disabled, With Description
  Props table: htmlFor, required, disabled

Checkbox —
  States row: Unchecked, Checked, Indeterminate, Disabled Unchecked, Disabled Checked
  With Label row: Checkbox + Label, Checkbox + Label + Description
  Props table: checked, disabled, onCheckedChange

RadioGroup —
  States: Unselected Group (3 options none selected), Selected Group (option 2 selected), Disabled Group, Single Disabled Option
  Props table: value, onValueChange, disabled

Switch —
  States row: Off, On, Disabled Off, Disabled On
  With Label row: Switch + Label, Switch + Label + Description
  Props table: checked, disabled, onCheckedChange

Toggle —
  States row: Default, Pressed, Disabled, Disabled Pressed
  Variants row: Default, Outline
  Sizes row: sm, default, lg
  Props table: pressed, onPressedChange, variant, size, disabled

ToggleGroup —
  Types row: Single Select (one active), Multiple Select (two active)
  Variants row: Default, Outline
  Props table: type, value, onValueChange, variant

Badge —
  Variants row: Default, Secondary, Destructive, Outline
  Props table: variant

Separator —
  Types row: Horizontal (full width line), Vertical (inside a flex row)
  Props table: orientation, decorative

Skeleton —
  Shapes row: Text Line, Circle, Rectangle, Card Skeleton (composed)
  Props table: className (for sizing)

Avatar —
  States row: With Image, With Fallback Initials, Broken Image (showing fallback)
  Sizes row: sm, default, lg, xl
  Props table: src, alt, fallback

Progress —
  Values row: 0%, 25%, 50%, 75%, 100%
  States row: Default, Indeterminate (animated)
  Props table: value, max

Slider —
  States row: Default (50%), Min (0%), Max (100%), Disabled, Range (two thumbs)
  Props table: value, min, max, step, disabled

Tooltip —
  Positions row: Show 4 buttons each with a tooltip arrow pointing Top, Right, Bottom, Left (render the tooltips as always-visible, not on hover)
  Props table: content, side, sideOffset, delayDuration

ScrollArea —
  Show: A contained box with a long list inside showing the scrollbar styling
  Props table: className, type

AspectRatio —
  Ratios row: 1:1, 4:3, 16:9 (each with a colored placeholder inside showing the ratio label)
  Props table: ratio

MOLECULES SHOWCASE must display:

Alert —
  Variants row: Default (info), Success, Warning, Destructive — each showing icon + title + description
  Props table: variant, title, description, icon

Card —
  Variants: Default Card (header + content + footer), Card with Image, Card with Actions, Card Outlined, Card Elevated
  Props table: title, description, children, footer

Tabs —
  States: Default (first tab active), Second Tab Active, Disabled Tab
  Variants: Default, Underline style
  Props table: defaultValue, value, onValueChange

Accordion —
  States: All Collapsed, First Open, Multiple Open (if collapsible type)
  Types: Single (only one open), Multiple (many open)
  Props table: type, collapsible, defaultValue

Breadcrumb —
  Variants: Simple (3 levels), With Dropdown (collapsed middle items), With Custom Separator
  Props table: items, separator

Pagination —
  States: First Page (prev disabled), Middle Page, Last Page (next disabled), With Ellipsis
  Props table: currentPage, totalPages, onPageChange

HoverCard —
  Show: The trigger text AND the card content both visible statically, with an arrow connecting them. Label "Trigger" and "Card Content"
  Props table: openDelay, closeDelay

Popover —
  Show: The trigger button AND the popover content both visible statically, labeled
  Props table: side, align, sideOffset

Collapsible —
  States: Collapsed (showing trigger only), Expanded (showing trigger + content)
  Props table: open, onOpenChange

FormField —
  States: Default (label + input), With Helper Text, With Error Message (red), Required, Disabled
  Props table: label, helperText, error, required, disabled

SearchBar —
  States: Empty, With Placeholder, With Value, With Filter Button, Loading
  Props table: placeholder, value, onSearch, onFilter

StatCard —
  Variants: Default (icon + value + label), With Trend Up (green arrow), With Trend Down (red arrow), Compact
  Props table: icon, value, label, trend, trendDirection

InputOTP —
  States: Empty (6 boxes), Partially Filled (3 of 6), Complete, Error, Disabled
  Props table: maxLength, value, onChange, disabled

TableRow —
  States: Default, Selected (highlighted), Hover State, With Actions Column, Expandable
  Props table: selected, onSelect, data

Sonner / Toast —
  Variants: Default, Success, Error, Warning, With Action Button, With Close Button
  Props table: title, description, variant, action, duration

ORGANISMS SHOWCASE must display:

DataTable —
  States: Default (with 5 rows of sample data), Empty State, Loading State (skeleton rows), With Selection Checkboxes, With Sorting Active, With Pagination
  Columns shown: Name, Status (badge), Date, Amount, Actions (dropdown)
  Props table: columns, data, pagination, sorting, selection

Dialog —
  Show the dialog rendered open (not behind a button trigger) with: Title, Description, Content area, Footer with Cancel + Confirm buttons
  Variants: Default, Destructive (delete confirmation), With Form Inside, Scrollable Content
  Props table: title, description, open, onOpenChange

AlertDialog —
  Show rendered open: Warning icon, title, description, Cancel + Destructive Action buttons
  Props table: title, description, confirmLabel, cancelLabel, onConfirm

Sheet —
  Show rendered open from right side: Header, scrollable content, footer
  Sides row: Left, Right, Top, Bottom (show 4 small versions)
  Props table: side, title, description, open

Drawer —
  Show rendered open from bottom: Handle bar, title, content
  Props table: title, description, open, snapPoints

DropdownMenu —
  Show the menu rendered open with: Regular items, Item with icon, Item with shortcut, Separator, Sub-menu expanded, Disabled item, Checkbox item, Radio group items
  Props table: items, trigger, align

ContextMenu —
  Show the menu rendered open with sample items, separators, and a sub-menu
  Props table: items

CommandPalette —
  Show rendered open with: Search input, grouped results (Recent, Suggestions, Actions), each item with icon + label + shortcut
  Props table: groups, placeholder, onSelect

Select —
  States: Closed (showing placeholder), Open (showing options), With Selected Value, Disabled, With Groups, With Search
  Props table: options, value, placeholder, disabled, onValueChange

Form —
  Show a complete rendered form with: Text input field, Email field, Select dropdown, Checkbox, Radio group, Textarea, Submit + Cancel buttons. Show validation errors on 2 fields.
  Props table: fields, onSubmit, validation

Calendar —
  States: Current Month, With Selected Date (highlighted), With Range Selected, With Disabled Dates (grayed out)
  Props table: selected, onSelect, disabled, mode

Sidebar —
  Show rendered sidebar with: Logo area, Navigation sections with icons, Active item highlighted, Collapsed state (icons only), Badge on an item
  Props table: items, collapsed, activeItem

NavigationMenu —
  Show horizontal nav bar with: Regular links, Dropdown panel open showing a grid of links with descriptions
  Props table: items

Menubar —
  Show: File menu open with items (New, Open, Save, separator, Exit with shortcut labels)
  Props table: menus

Carousel —
  Show: 3 visible slides, dot indicators below, left/right arrows
  Props table: items, autoPlay, loop

Resizable —
  Show: Two panels side by side with a visible drag handle between them, labeled "Panel A" and "Panel B"
  Props table: direction, defaultSizes

TEMPLATES SHOWCASE:
Show each template as a wireframe/schematic diagram with labeled regions:
- BaseTemplate: sidebar + header + main content area
- DashboardTemplate: sidebar + top stats row + content grid + optional right panel
- TablePageTemplate: header + toolbar (search/filter/sort) + table area + pagination footer
- FormPageTemplate: header + breadcrumb + centered form area + sticky action bar
- DetailPageTemplate: breadcrumb + hero section + tabbed content area
- EmptyStateTemplate: centered icon + heading + description + CTA button

Each template wireframe should use light gray boxes with dashed borders and text labels for each region. Show the layout proportions clearly.

DESIGN TOKENS PAGE:
Show organized tables for:
- Colors: swatches with hex values and token names (primary, secondary, destructive, muted, accent, etc. plus all their foreground variants)
- Typography: each font size rendered as sample text with the token name and px value
- Spacing: visual blocks showing each spacing value (4px, 8px, 12px, 16px, 24px, 32px, etc.)
- Border Radius: boxes showing each radius value (none, sm, default, md, lg, full)
- Shadows: boxes showing each shadow level (sm, default, md, lg, xl)

GLOBAL RULES:
- Every component state is rendered STATICALLY and VISIBLY on the page — no hover or click required to see any state
- Each state/variant has a small muted label underneath or above it
- Use consistent spacing: 48px between component sections, 24px between variant rows within a section
- Each component section is wrapped in a subtle bordered card with the component name as heading
- Props tables use a clean table with columns: Prop, Type, Default, Description
- All design token values stay unchanged
- The sidebar nav only shows: Design Tokens, Atoms, Molecules, Organisms, Templates
- Delete all product pages