import { useTheme } from 'next-themes'

const enum ETheme {
  dark = 'dark',
  light = 'light'
}
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    if (theme != ETheme.dark) setTheme(ETheme.dark)
    else setTheme(ETheme.light)
  }

  return (
    <div className='text-2xl flex items-center text-center mr-2 '>
      <button onClick={handleToggle}> {theme == ETheme.dark ?
        '🌻'
        : '🧟‍♂️'
      } </button>
    </div>
  )
}

export default ThemeSwitcher