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
        'main':             '#555555',
        'main-link':        '#666666',
        'main-hover':       '#000000',
        'main-select':      '#444444',

        'link':             '#666666',
        'link-alt':         '#666666',

        'hover':            '#000000',
        'hover-alt':        '#444444',

        'heading':          '#555555',
        'heading-link':     '#777777',
        'heading-hover':    '#555555',

        'meta':             '#999999',
        'meta-link':        '#777777',
        'meta-hover':       '#555555',

        'menu':             '#555555',
        'menu-link':        '#666666',
        'menu-hover':       '#444444',

        'line':             '#666666',

        'black':            '#000000',
        'darkest':          '#0C0C0C',
        'darker':           '#191919',
        'dark':             '#333333',
        'mid3x':            '#444444',
        'mid2x':            '#555555',
        'mid':              '#666666',
        'light':            '#999999',
        'lighter':          '#cccccc',
        'lightest':         '#e5e5e5',
        'lightest2x':       '#efefef',
        'lightest3x':       '#f0f0f0',
        'lightest4x':       '#f9f9f9',
        'white':            '#ffffff',
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
        'intro':            '500',
        'meta':             '600',
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
        'medium3x':         ['1.875rem', '2rem'],
        'large':            ['2.25rem', '2.5rem'],
        'h2':               ['2.25rem', '2.5rem'],
        'larger':           ['3rem', '1'],
        'h1':               ['3rem', '1'],
        'largest':          ['3.75rem', '1'],
        'huge':             ['4.5rem', '1'],
        'huge2x':           ['6rem', '1'],
        'gigantic':         ['8rem', '1'],
      },
      borderWidth: {
        'line':             '1px',
        'line2x':           '2px',
        'line5x':           '5px',
        'line10x':          '10px',
      },
      spacing: {  
      'zero':               '0',
      '1px':                '0.0625rem',
        'px':               '0.0625rem',
        'line':             '0.063rem',
      '2px':                '0.125rem',
        'line2x':           '0.125rem',
      '5px':                '0.3125rem',
        'line5x':           '0.3125rem',
      '8px':                '0.5rem',
        'section-tiny':     '0.5rem',
      '10px':               '0.625rem',
        'tiny':             '0.625rem',
        'line10x':          '0.625rem',
      '12px':               '0.625rem',
        'smaller':          '0.75rem',
      '14px':               '0.875rem',
        'small':            '0.875rem',
        'section-small':    '0.875rem',
      '16px':               '1rem',
        'base':             '1rem',
      '18px':               '1.125rem',
        'main':             '1.125rem',
        'p':                '1.125rem',
        'list':             '1.125rem',
      '20px':               '1.25rem',  
        'medium':           '1.25rem',
        'section':          '1.25rem',
        'xl':               '1.25rem',
      '24px':               '1.5rem',  
        'medium2x':         '1.5rem',
        'section-medium':   '1.5rem',
        '2xl':              '1.5rem',
      '30px':               '1.875rem',
        'medium3x':         '1.875rem',
        '3xl':              '1.875rem',
      '32px':               '2rem',
        'intro':            '2rem',
      '36px':               '2.25rem',
        'large':            '2.25rem',
        'section-large':    '2.25rem',
        '4xl':              '2.25rem',
      '48px':               '3rem',
        'larger':           '3rem',
        'section-larger':   '3rem',
        '5xl':              '3rem',
      '60px':               '3.75rem',
        'largest':          '3.75rem',
        '6xl':              '3.75rem',
      '72px':               '4.5rem',
        'huge':             '4.5rem',
        'section-huge':     '4.5rem',
        '7xl':              '4.5rem',
      '96px':               '6rem',
        'huge2x':           '6rem',
        '8xl':              '6rem',
      '128px':              '8rem',
        'gigantic':         '8rem',
      },
      width: {
        // 320px
        'tinywidth':        '20rem',
        // 512px
        'smallwidth':       '32rem',
        // 768px
        'mediumwidth':      '48rem',
        // 1024px
        'largewidth':       '64rem',
        // 1280px
        'xlargewidth':      '80rem',
      },
      maxWidth: {
        // 320px
        'tinywidth':        '20rem',
        // 512px
        'smallwidth':       '32rem',
        // 768px
        'mediumwidth':      '48rem',
        // 1024px
        'largewidth':       '64rem',
        // 1280px
        'xlargewidth':      '80rem',
      },
      screens: {
        'menuscreen':       '768px',
        'tinyscreen':       '320px',
        'smallscreen':      '512px',
        'mediumscreen':     '768px',
        'largescreen':      '1024px',
        'xlargescreen':     '1280px',
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