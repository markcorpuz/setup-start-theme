// This file controls how Tailwind processes your CSS. For details, see
// https://tailwindcss.com/docs/configuration

module.exports = 
{
  //
  // WARNING: By default, CodeKit automatically populates the `content` array with all entries from [Project Settings > PurgeCSS]
  // in CodeKit's UI. If you add ANY entries to the `content` array here, CodeKit will not auto-populate the array; it becomes your
  // responsibility to include every type of file in your project that uses CSS rules. It is preferable to edit the PurgeCSS content 
  // list in CodeKit's UI.
  // 
  // WARNING: DO NOT delete `content` or comment it out. If you do, CodeKit will treat this as a Tailwind 2.x project instead of 3.x. 
  //
  content: [],


  //
  // All other TailwindCSS options are 100% under your control. Edit this config file as shown in the Tailwind Docs
  // to enable the settings or customizations you need.
  // 
  theme: {
    extend: {
      colors: {
        'maintext': '#333333',
        'mainselection': '#999999',
        'mainlink': '#3B82F6',
        'mainlinkeffect': '#3B82F6',
        'maindivider': '#999999',
      },
      fontFamily: {
        'round': ["'Rubik'", "'Quicksand'", 'Helvetica', 'Arial', 'sans-serif'],
        'hard': ["'Source Sans Pro'", "'Roboto'", "'Lato'", 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ["'EB Garamond'", "'Source Serif Pro'", "'PT Serif'", "'Sorts Mill Goudy'", 'Georgia', 'Garamond', 'serif'],
      },
      screens: {
        'menu': '768px',
      },
    }
  },

  variants: {},

  //
  // If you want to run any Tailwind plugins (such as 'tailwindcss-typography'), simply install those into the Project via the
  // Packages area in CodeKit, then pass their names (and, optionally, any configuration values) here. 
  // Full file paths are not necessary; CodeKit will find them.
  //
  plugins: []
}