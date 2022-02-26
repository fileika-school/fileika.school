import Link from 'next/link'
import { MainMenuStyled } from './styles'

/**
 * Главное меню
 */
export const MainMenu: React.FC = () => {
  return (
    <MainMenuStyled>
      <Link href="/"> Главная страница </Link>
      <Link href="/users"> Пользователи </Link>
      <div className="flex-1" />
      <Link href="/contacts"> Контакты </Link>
    </MainMenuStyled>
  )
}
