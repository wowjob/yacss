export const ThemeColorMap = {
  // Represents the core identity of the brand. Used prominently in branding-related elements to create a recognizable identity.
  // **Common UI Usage**:
  // - Logo
  // - Navbar background or highlights
  // - Key call-to-action buttons (e.g., "Get Started")
  // - Brand-themed components like cards or headers
  brand: { hue: 259, saturation: 77 }, // Vibrant purple

  // The primary action color, used to drive user attention and encourage interaction.
  // **Common UI Usage**:
  // - Primary buttons (e.g., "Submit", "Continue")
  // - Active links or tabs
  // - Progress bars
  primary: { hue: 225, saturation: 77 }, // Bright blue

  // A secondary color that complements the primary, often used to highlight additional, less critical actions.
  // **Common UI Usage**:
  // - Secondary buttons (e.g., "Cancel")
  // - Notifications or badges (e.g., "New")
  // - Backgrounds for secondary cards or hover effects
  secondary: { hue: 318, saturation: 77 }, // Vibrant pink

  // Used as a supporting color to create depth and add variety, often for subtle yet appealing highlights.
  // **Common UI Usage**:
  // - Link hover states
  // - Borders or shadows
  // - Infographic details (e.g., charts, diagrams)
  tertiary: { hue: 245, saturation: 86 }, // Soft violet

  // The neutral base color, ideal for unobtrusive elements that form the structure of the UI.
  // **Common UI Usage**:
  // - Text on light backgrounds
  // - Divider lines
  // - Inactive tabs or buttons
  default: { hue: 221, saturation: 13 }, // Neutral gray

  // Represents errors, warnings, or negative outcomes, capturing user attention with urgency.
  // **Common UI Usage**:
  // - Error alerts (e.g., "Invalid input")
  // - Validation error messages
  // - Critical notifications or icons
  error: { hue: 4, saturation: 86 }, // Bright red

  // Represents cautionary states or important warnings without the urgency of errors.
  // **Common UI Usage**:
  // - Warning alerts (e.g., "Unsaved changes")
  // - Notifications about time-sensitive actions
  // - Status indicators (e.g., "Pending")
  warning: { hue: 34, saturation: 94 }, // Vivid orange

  // Signifies success, positive feedback, or a completed action, instilling confidence in the user.
  // **Common UI Usage**:
  // - Success alerts (e.g., "Action completed")
  // - Success badges (e.g., "Verified", "Completed")
  // - Indicators for progress completion
  success: { hue: 152, saturation: 77 }, // Lush green

  // Used for neutral informational messages, promoting clarity without alarming the user.
  // **Common UI Usage**:
  // - Info alerts (e.g., "FYI: Updates applied")
  // - Helper text or tooltips
  // - Notifications (e.g., "You have 2 unread messages")
  info: { hue: 200, saturation: 77 }, // Calm cyan

  // Represents light backgrounds or areas requiring contrast for other elements, providing a clean and minimalistic base.
  // **Common UI Usage**:
  // - Backgrounds for cards, modals, or sections
  // - Placeholder text
  // - Borders or dividers in high-contrast themes
  light: { hue: 0, saturation: 0 }, // Pure white

  // A complementary dark shade for creating contrast or grounding lighter UI elements.
  // **Common UI Usage**:
  // - Text on light backgrounds
  // - Dark-themed cards or sections
  // - Toolbars or footers
  dark: { hue: 240, saturation: 15 }, // Soft dark gray

  // An attention-grabbing accent color to highlight important elements or encourage engagement.
  // **Common UI Usage**:
  // - Call-to-action highlights (e.g., "Limited Offer")
  // - Highlighted text or icons
  // - Badges (e.g., "Sale", "Promo")
  accent: { hue: 50, saturation: 94 }, // Bright yellow

  // Represents less prominent or de-emphasized elements, helping create a balanced and readable design.
  // **Common UI Usage**:
  // - Placeholder text (e.g., "Search...")
  // - Muted button states (e.g., "Disabled")
  // - Backgrounds for less critical components (e.g., tooltips, dropdowns)
  muted: { hue: 210, saturation: 10 }, // Subdued gray-blue

  // A vibrant and energetic highlight color used sparingly to add a sense of dynamism and fun.
  // **Common UI Usage**:
  // - Special emphasis on action buttons (e.g., "Upgrade Plan")
  // - Highlights in graphs, charts, or statistics
  // - Special promotional banners or text
  highlight: { hue: 280, saturation: 80 }, // Electric purple
} as const

export type TThemeColor = keyof typeof ThemeColorMap
