import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const getIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="w-5 h-5" />
      case 'light':
        return <Sun className="w-5 h-5" />
      default:
        return <Monitor className="w-5 h-5" />
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
      aria-label="Cambiar tema"
    >
      {getIcon()}
    </button>
  )
}
