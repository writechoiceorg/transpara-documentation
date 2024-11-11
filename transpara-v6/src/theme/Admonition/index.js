import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';
import SvgFont from '../../components/SvgFont/SvgFont';

function NoteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#8A8A8A" stroke-width="2" fill="none"/>
      <circle cx="10" cy="5" r="1" transform="rotate(180 10 5)" fill="#8A8A8A"/>
      <path d="M10 15L10 9" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round"/>
    </svg>
  );
}
function TipIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path fill="none" d="M9.26756 3.00337C10.0372 1.66914 11.9628 1.66913 12.7324 3.00337L12.8846 3.2671C13.3372 4.05171 14.2606 4.4342 15.1354 4.19942L15.4295 4.12051C16.9171 3.72127 18.2787 5.08289 17.8795 6.57055L17.8006 6.8646C17.5658 7.73944 17.9483 8.66284 18.7329 9.11543L18.9966 9.26756C20.3309 10.0372 20.3309 11.9628 18.9966 12.7324L18.7329 12.8846C17.9483 13.3372 17.5658 14.2606 17.8006 15.1354L17.8795 15.4295C18.2787 16.9171 16.9171 18.2787 15.4295 17.8795L15.1354 17.8006C14.2606 17.5658 13.3372 17.9483 12.8846 18.7329L12.7324 18.9966C11.9628 20.3309 10.0372 20.3309 9.26756 18.9966L9.11543 18.7329C8.66284 17.9483 7.73944 17.5658 6.8646 17.8006L6.57055 17.8795C5.08289 18.2787 3.72127 16.9171 4.12051 15.4295L4.19942 15.1354C4.4342 14.2606 4.05171 13.3372 3.2671 12.8846L3.00337 12.7324C1.66914 11.9628 1.66913 10.0372 3.00337 9.26756L3.2671 9.11543C4.05171 8.66284 4.4342 7.73944 4.19942 6.8646L4.12051 6.57055C3.72127 5.08289 5.08289 3.72127 6.57055 4.12051L6.8646 4.19942C7.73944 4.4342 8.66284 4.05171 9.11543 3.2671L9.26756 3.00337Z" stroke="#669900" stroke-width="2"/>
      <path d="M8 11L10 13L14 9" stroke="#669900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}
function DangerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
      <path fill="none" d="M7.27249 2.19366L1.19239 12.3439C1.06704 12.561 1.00071 12.8071 1.00001 13.0578C0.999304 13.3085 1.06425 13.555 1.18839 13.7728C1.31253 13.9906 1.49154 14.1721 1.70759 14.2992C1.92365 14.4263 2.16923 14.4947 2.4199 14.4974H14.5801C14.8308 14.4947 15.0763 14.4263 15.2924 14.2992C15.5085 14.1721 15.6875 13.9906 15.8116 13.7728C15.9357 13.555 16.0007 13.3085 16 13.0578C15.9993 12.8071 15.933 12.561 15.8076 12.3439L9.72751 2.19366C9.59954 1.98269 9.41935 1.80826 9.20434 1.68721C8.98933 1.56616 8.74675 1.50256 8.5 1.50256C8.25325 1.50256 8.01067 1.56616 7.79566 1.68721C7.58065 1.80826 7.40046 1.98269 7.27249 2.19366Z" stroke="#FF6D8B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 5.88333V8.75469" stroke="#FF6D8B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 11.6261H8.50814" stroke="#FF6D8B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="5" r="1" transform="rotate(-180 9 5)" fill="#4860F5"/>
      <path d="M9 13L9 9" stroke="#4860F5" stroke-width="2" stroke-linecap="round"/>
      <path  fill="none" d="M1 12V6C1 3.23858 3.23858 1 6 1H12C14.7614 1 17 3.23858 17 6V12C17 14.7614 14.7614 17 12 17H6C3.23858 17 1 14.7614 1 12Z" stroke="#4860F5" stroke-width="2"/>
    </svg>
  );
}
function CautionIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#F4982B" stroke-width="2" fill="none"/>
      <circle cx="10" cy="15" r="1" fill="#F4982B"/>
      <path d="M10 5V11" stroke="#F4982B" stroke-width="2" stroke-linecap="round"/>
    </svg>
  );
}

function SupportIcon() {
  return(
    <SvgFont icon="108"/>
  )
}

function TrainingIcon() {
  return(
    <SvgFont icon="116"/>
  )
}

function UniqueIcon() {
  return(
    <img className="callout_img" src="https://raw.githubusercontent.com/transpara/documentation/main/visual-kpi-docs/static/img/favicon.png" alt="Callout Icon" />
  )
}
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
const AdmonitionConfigs = {
  support: {
    infimaClassName: 'support',
    iconComponent: SupportIcon,
    label: (
      <Translate
        id="theme.admonition.support"
        description="The default label used for the support admonition (:::security)">
        Support
      </Translate>
    )
  },
  training: {
    infimaClassName: 'training',
    iconComponent: TrainingIcon,
    label: (
      <Translate
        id="theme.admonition.training"
        description="The default label used for the training admonition (:::training)">
        Training
      </Translate>
    )
  },
  unique: {
    infimaClassName: 'unique',
    iconComponent: UniqueIcon,
    label: (
      <Translate
        id="theme.admonition.unique"
        description="The default label used for the unique admonition (:::unique)">
        Unique
      </Translate>
    )
  },
  note: {
    infimaClassName: 'secondary',
    iconComponent: NoteIcon,
    label: (
      <Translate
        id="theme.admonition.note"
        description="The default label used for the Note admonition (:::note)">
        Note
      </Translate>
    ),
  },
  tip: {
    infimaClassName: 'success',
    iconComponent: TipIcon,
    label: (
      <Translate
        id="theme.admonition.tip"
        description="The default label used for the Tip admonition (:::tip)">
        Tip
      </Translate>
    ),
  },
  danger: {
    infimaClassName: 'danger',
    iconComponent: DangerIcon,
    label: (
      <Translate
        id="theme.admonition.danger"
        description="The default label used for the Danger admonition (:::danger)">
        Danger
      </Translate>
    ),
  },
  info: {
    infimaClassName: 'info',
    iconComponent: InfoIcon,
    label: (
      <Translate
        id="theme.admonition.info"
        description="The default label used for the Info admonition (:::info)">
        Info
      </Translate>
    ),
  },
  caution: {
    infimaClassName: 'warning',
    iconComponent: CautionIcon,
    label: (
      <Translate
        id="theme.admonition.caution"
        description="The default label used for the Caution admonition (:::caution)">
        Caution
      </Translate>
    ),
  },
};
// Legacy aliases, undocumented but kept for retro-compatibility
const aliases = {
  secondary: 'note',
  important: 'info',
  success: 'tip',
  warning: 'danger',
};
function getAdmonitionConfig(unsafeType) {
  const type = aliases[unsafeType] ?? unsafeType;
  const config = AdmonitionConfigs[type];
  if (config) {
    return config;
  }
  console.warn(
    `No admonition config found for admonition type "${type}". Using Info as fallback.`,
  );
  return AdmonitionConfigs.info;
}
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
  const items = React.Children.toArray(children);
  const mdxAdmonitionTitle = items.find(
    (item) =>
      React.isValidElement(item) &&
      item.props?.mdxType === 'mdxAdmonitionTitle',
  );
  const rest = <>{items.filter((item) => item !== mdxAdmonitionTitle)}</>;
  return {
    mdxAdmonitionTitle,
    rest,
  };
}
function processAdmonitionProps(props) {
  const {mdxAdmonitionTitle, rest} = extractMDXAdmonitionTitle(props.children);
  return {
    ...props,
    title: props.title ?? mdxAdmonitionTitle,
    children: rest,
  };
}
export default function Admonition(props) {
  const {children, type, title, icon: iconProp} = processAdmonitionProps(props);
  const typeConfig = getAdmonitionConfig(type);
  const titleLabel = title ?? typeConfig.label;
  const {iconComponent: IconComponent} = typeConfig;
  const icon = iconProp ?? <IconComponent />;
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(props.type),
        'alert',
        `alert--${typeConfig.infimaClassName}`,
        styles.admonition,
      )}>
      <span className={styles.admonitionIcon}>{icon}</span>
      <div>
        <div className={styles.admonitionHeading}>
          {titleLabel}
        </div>
        <div className={styles.admonitionContent}>{children}</div>
      </div>
      
    </div>
  );
}
