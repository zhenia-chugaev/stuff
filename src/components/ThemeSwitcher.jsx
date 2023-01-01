import { FormattedMessage } from 'react-intl';
import { Switch } from 'antd';

const ThemeSwitcher = ({ theme, toggleThemes }) => (
  <Switch
    className="theme-switcher"
    checkedChildren=<FormattedMessage id="header.theme-switcher.light" />
    unCheckedChildren=<FormattedMessage id="header.theme-switcher.dark" />
    defaultChecked={theme === 'dark'}
    onChange={toggleThemes}
  />
);

export default ThemeSwitcher;
