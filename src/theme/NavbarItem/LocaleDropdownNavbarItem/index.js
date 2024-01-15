import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import styles from './styles.module.css';
export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString = '',
  ...props
}) {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const { pathname, search, hash } = useLocation();
  // const localeItems = locales.map((locale) => {
  //   const baseTo = `pathname://${alternatePageUtils.createUrl({
  //     locale,
  //     fullyQualified: false,
  //   })}`;
  //   // preserve ?search#hash suffix on locale switches
  //   const to = `${baseTo}${search}${hash}${queryString}`;
  //   return {
  //     label: localeConfigs[locale].label,
  //     lang: localeConfigs[locale].htmlLang,
  //     to,
  //     target: '_self',
  //     autoAddBaseUrl: false,
  //     className:
  //       // eslint-disable-next-line no-nested-ternary
  //       locale === currentLocale
  //         ? // Similar idea as DefaultNavbarItem: select the right Infima active
  //           // class name. This cannot be substituted with isActive, because the
  //           // target URLs contain `pathname://` and therefore are not NavLinks!
  //           mobile
  //           ? 'menu__link--active'
  //           : 'dropdown__link--active'
  //         : '',
  //   };
  // });
  // const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  // Mobile is handled a bit differently
  const base = 'https://vrm.dev';
  // const baseTo = `pathname://${alternatePageUtils.createUrl({
  //   locale,
  //   fullyQualified: false,
  // })}`;
  let location_path = pathname;
  if (location_path.startsWith("/vrm.dev.en")) {
    location_path = location_path.substring("/vrm.dev.en".length);
  }
  const to = `${base}${location_path}`;
  const dropdownLabel = mobile
    ? translate({
      message: 'Languages',
      id: 'theme.navbar.mobileLanguageDropdown.label',
      description: 'The label for the mobile language switcher dropdown',
    })
    : localeConfigs[currentLocale].label;
  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={[
        {
          label: `日本語`,
          lang: "ja",
          to,
          target: '_self',
          autoAddBaseUrl: false,
          className:
            // eslint-disable-next-line no-nested-ternary
            false
              ? // Similar idea as DefaultNavbarItem: select the right Infima active
              // class name. This cannot be substituted with isActive, because the
              // target URLs contain `pathname://` and therefore are not NavLinks!
              mobile
                ? 'menu__link--active'
                : 'dropdown__link--active'
              : '',
        }
      ]}
    />
  );
}
