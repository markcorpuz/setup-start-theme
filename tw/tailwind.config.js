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
        'main':             '#333333',
        'main-select':      '#999999',
        'link':             '#3B82F6',
        'hover':            '#629BF7',
        'heading':          '#333333',
        'line':             '#666666',
      },
      fontFamily: {
        'main':             ["'Source Sans Pro'", "'Roboto'", "'Lato'", 'Helvetica', 'Arial', 'sans-serif'],
        'heading':          ["'Source Sans Pro'", "'Roboto'", "'Lato'", 'Helvetica', 'Arial', 'sans-serif'],
        'meta':             ["'Source Sans Pro'", "'Roboto'", "'Lato'", 'Helvetica', 'Arial', 'sans-serif'],

        'round':            ["'Rubik'", "'Quicksand'", 'Helvetica', 'Arial', 'sans-serif'],
        'hard':             ["'Source Sans Pro'", "'Roboto'", "'Lato'", 'Helvetica', 'Arial', 'sans-serif'],
        'serif':            ["'EB Garamond'", "'Source Serif Pro'", "'PT Serif'", "'Sorts Mill Goudy'", 'Georgia', 'Garamond', 'serif'],
      },
      fontWeight: {
        'main':             '400',
        'strong':           '700',
        'heading':          '600',
      },
      fontSize: {
        'tiny':             ['0.625rem', '0.8rem'],
        'smaller':          ['0.75rem', '1rem'],
        'reference':        ['0.75rem', '1rem'],
        'small':            ['0.875rem', '1.25rem'],
        'meta':             ['0.875rem', '1.25rem'],
        'base':             ['1rem', '1.5rem'],
        'h6':               ['1rem', '1.5rem'],
        'main':             ['1.125rem', '1.75rem'],
        'h5':               ['1.125rem', '1.75rem'],
        'medium':           ['1.25rem', '1.75rem'],
        'h4':               ['1.25rem', '1.75rem'],
        'medium2x':         ['1.5rem', '2rem'],
        'h3':               ['1.5rem', '2rem'],
        'intro':            ['1.5rem', '2rem'],
        'large':            ['2.25rem', '2.5rem'],
        'h2':               ['2.25rem', '2.5rem'],
        'larger':           ['3rem', '1'],
        'h1':               ['3rem', '1'],
        'largest':          ['3.75rem', '1'],
        'huge':             ['4.5rem', '1'],
        'huge2x':           ['6rem', '1'],
        'gigantic':         ['8rem', '1'],
      },
      spacing: {
        'main':             '1.125rem',
        'p':                '1.25rem',
        'list':             '1.25rem',
        'intro':            '2rem',
        'section':          '4rem',
        'section2':         '2rem',
        
        'zero':             '0',
        'px':               '0.063rem',
        '1px':              '0.063rem',
        '2px':              '0.13rem',
        '5px':              '0.3rem',
        'tiny':             '0.5rem',
        'smaller':          '0.75rem',
        'small':            '0.875rem',
        'base':             '1rem',
        'xl':               '1.25rem',
        'medium':           '1.5rem',
        '2xl':              '1.5rem',
        '3xl':              '1.875rem',
        'large':            '2.25rem',
        '4xl':              '2.25rem',
        'larger':           '3rem',
        '5xl':              '3rem',
        'largest':          '3.75rem',
        '6xl':              '3.75rem',
        'huge':             '4.5rem',
        '7xl':              '4.5rem',
        'huge2x':           '4.5rem',
        '8xl':              '6rem',
      },
      width: {
        'tiny':             '20rem',
        'small':            '32rem',
        'medium':           '48rem',
        'large':            '64rem',
        'xlarge':           '80rem',
      },
      maxWidth: {
        'tiny':             '20rem',
        'small':            '32rem',
        'medium':           '48rem',
        'large':            '64rem',
        'xlarge':           '80rem',
      },
      screens: {
        'menu':             '768px',
        'tiny':             '320px',
        'small':            '512px',
        'medium':           '768px',
        'large':            '1024px',
        'xlarge':           '1280px',
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