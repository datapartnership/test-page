/* @ds-bundle: {"format":4,"namespace":"WorldBankGroupDesignSystem_53b2b3","components":[{"name":"Banner","sourcePath":"components/banners/Banner.jsx"},{"name":"ContentCard","sourcePath":"components/cards/ContentCard.jsx"},{"name":"FocusCard","sourcePath":"components/cards/FocusCard.jsx"},{"name":"ImageOverlayCard","sourcePath":"components/cards/ImageOverlayCard.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"Expert","sourcePath":"components/content/Expert.jsx"},{"name":"InlineApiItem","sourcePath":"components/content/InlineApiItem.jsx"},{"name":"LinkList","sourcePath":"components/content/LinkList.jsx"},{"name":"Pullquote","sourcePath":"components/content/Pullquote.jsx"},{"name":"Synopsis","sourcePath":"components/content/Synopsis.jsx"},{"name":"Tweetable","sourcePath":"components/content/Tweetable.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CtaButton","sourcePath":"components/core/CtaButton.jsx"},{"name":"Hammer","sourcePath":"components/core/Hammer.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Dropdown","sourcePath":"components/forms/Dropdown.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"GlobalNav","sourcePath":"components/navigation/GlobalNav.jsx"},{"name":"LeftNav","sourcePath":"components/navigation/LeftNav.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/banners/Banner.jsx":"10e4a4b14f8d","components/cards/ContentCard.jsx":"d45a760cbeec","components/cards/FocusCard.jsx":"550960704775","components/cards/ImageOverlayCard.jsx":"8b42b9f345c3","components/cards/StatCard.jsx":"d192c6ab8194","components/content/Expert.jsx":"12979fe944c7","components/content/InlineApiItem.jsx":"fa2c6415a2c9","components/content/LinkList.jsx":"997031ac41b9","components/content/Pullquote.jsx":"5c31ab25e4b4","components/content/Synopsis.jsx":"a0932377492c","components/content/Tweetable.jsx":"d0df07d04af1","components/core/Badge.jsx":"23830281cde6","components/core/Button.jsx":"96ecbd7ae150","components/core/CtaButton.jsx":"d6bfe142a411","components/core/Hammer.jsx":"f25428a4e9c7","components/core/Icon.jsx":"b1f45e4725f7","components/data/DataTable.jsx":"b074a59f7b7a","components/forms/Checkbox.jsx":"30de9720e086","components/forms/Dropdown.jsx":"13c4d0f1ae4e","components/forms/Radio.jsx":"c1d4a56930ee","components/forms/TextInput.jsx":"250466fdd94d","components/navigation/Breadcrumb.jsx":"8d8cf7c660f6","components/navigation/GlobalNav.jsx":"42269b045bc3","components/navigation/LeftNav.jsx":"d387313018c7","components/navigation/Pagination.jsx":"4b6430829fe4","components/navigation/Tabs.jsx":"7894b54b0b03","ui_kits/worldbank-site/HomeScreen.jsx":"9bb512db3784","ui_kits/worldbank-site/SearchScreen.jsx":"f401c980d14b","ui_kits/worldbank-site/StoryScreen.jsx":"5a2b5891ab2d","ui_kits/worldbank-site/TopicScreen.jsx":"5b5ecb2a1f32","ui_kits/worldbank-site/data.js":"da574554309f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WorldBankGroupDesignSystem_53b2b3 = window.WorldBankGroupDesignSystem_53b2b3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/FocusCard.jsx
try { (() => {
function FocusCard({
  image,
  title,
  description,
  height = 260,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.4)'
    }
  }), /*#__PURE__*/React.createElement("h5", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      margin: 0,
      padding: 16,
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      fontWeight: 400,
      opacity: h ? 0 : 1,
      zIndex: 3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#0071bc',
      opacity: h ? 0.8 : 0,
      transition: 'opacity .3s ease-in',
      padding: '24px 24px 30px',
      color: '#fff',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      fontWeight: 400,
      margin: '0 0 8px',
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      margin: 0,
      color: '#fff'
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '1em',
      bottom: '1em',
      width: 25,
      height: 25,
      border: '2px solid #fff',
      borderRadius: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'content-box'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "loop loop-chevron-right",
    "aria-hidden": "true",
    style: {
      fontSize: 10,
      color: '#fff'
    }
  }))));
}
Object.assign(__ds_scope, { FocusCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FocusCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ImageOverlayCard.jsx
try { (() => {
function ImageOverlayCard({
  image,
  title,
  description,
  hammer,
  height = 240,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      height,
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: h ? 32 : '64px 32px 24px',
      color: '#fff',
      transition: 'all 0.3s ease-in-out',
      background: h ? 'linear-gradient(to bottom, transparent 0%, #000 50%, #000 100%)' : 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 20%, #000 100%)'
    }
  }, hammer ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      margin: '0 0 8px'
    }
  }, hammer) : null, /*#__PURE__*/React.createElement("h5", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      fontWeight: 400,
      margin: h ? '0 0 8px' : 0,
      color: '#fff'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      margin: 0,
      maxHeight: h ? 120 : 0,
      overflow: 'hidden',
      transition: 'max-height 0.3s ease-in-out',
      color: '#fff'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { ImageOverlayCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ImageOverlayCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  description,
  icon,
  links = [],
  background = '#0071bc',
  layout = 'stacked',
  style
}) {
  const row = layout === 'horizontal';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background,
      color: '#fff',
      padding: 24,
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
      gap: row ? 0 : 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      flex: row ? '0 0 40%' : 'none',
      marginBottom: 8
    }
  }, icon ? /*#__PURE__*/React.createElement("i", {
    className: 'loop loop-' + icon,
    "aria-hidden": "true",
    style: {
      fontSize: 50,
      marginRight: 16,
      lineHeight: 1
    }
  }) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: '44px',
      wordWrap: 'break-word'
    }
  }, value), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      lineHeight: '20px',
      marginTop: 4
    }
  }, label) : null)), /*#__PURE__*/React.createElement("div", {
    style: row ? {
      borderLeft: '1px solid #787878',
      paddingLeft: 32,
      flex: '0 0 60%',
      boxSizing: 'border-box'
    } : null
  }, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      lineHeight: '20px',
      margin: '0 0 16px',
      color: '#fff'
    }
  }, description) : null, links.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      margin: '0 0 8px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#fff',
      textDecoration: 'none'
    }
  }, l, /*#__PURE__*/React.createElement("i", {
    className: "loop loop-chevron-right",
    "aria-hidden": "true",
    style: {
      fontSize: 10,
      marginLeft: 5,
      verticalAlign: 'middle'
    }
  }))))) : null));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Expert.jsx
try { (() => {
function Expert({
  name,
  role,
  description,
  image,
  variant = 'default',
  href = '#',
  style
}) {
  const size = variant === 'stack' ? 90 : variant === 'inline' ? 100 : 175;
  const title = variant === 'inline' ? {
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    lineHeight: '1.375rem',
    margin: '0 0 8px',
    color: '#0071bc'
  } : variant === 'stack' ? {
    fontFamily: 'var(--font-display)',
    fontSize: '1.125rem',
    lineHeight: '1.625rem',
    fontWeight: 700,
    margin: '0 0 8px',
    color: '#333'
  } : {
    fontFamily: 'var(--font-display)',
    fontSize: '1.75rem',
    lineHeight: '2rem',
    margin: '0 0 16px',
    color: '#333'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: size,
      height: size,
      objectFit: 'cover',
      flex: 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...title
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, name)), role ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      fontWeight: 700,
      color: '#333'
    }
  }, role) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      color: '#333',
      margin: '4px 0 0'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Expert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Expert.jsx", error: String((e && e.message) || e) }); }

// components/content/InlineApiItem.jsx
try { (() => {
function InlineApiItem({
  meta = [],
  title,
  description,
  primary = false,
  href = '#',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid #e5e5e5',
      margin: '0 0 32px',
      padding: '0 0 32px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.0625rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: '#787878',
      margin: '0 0 16px'
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: primary && i === 0 ? '#0071bc' : undefined,
      fontSize: i === 0 ? '0.75rem' : undefined,
      ...(i < meta.length - 1 ? {
        borderRight: '1px solid #787878',
        marginRight: 8,
        paddingRight: 8
      } : null)
    }
  }, m))), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.125rem',
      lineHeight: '1.625rem',
      fontWeight: 600,
      color: '#333',
      textDecoration: 'none'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      color: '#333',
      margin: '8px 0 0'
    }
  }, description) : null);
}
Object.assign(__ds_scope, { InlineApiItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/InlineApiItem.jsx", error: String((e && e.message) || e) }); }

// components/content/LinkList.jsx
try { (() => {
function LinkList({
  heading,
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, heading ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
      color: '#333',
      margin: '0 0 8px',
      fontWeight: 600
    }
  }, heading) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 14,
      lineHeight: '20px',
      margin: '0 0 16px'
    }
  }, it.icon ? /*#__PURE__*/React.createElement("i", {
    className: 'loop loop-' + it.icon,
    "aria-hidden": "true",
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: '#0071bc',
      marginRight: 4,
      verticalAlign: 'text-bottom'
    }
  }) : null, /*#__PURE__*/React.createElement("a", {
    href: it.href || '#',
    style: {
      color: '#0071bc',
      textDecoration: 'none'
    }
  }, it.label), it.meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: '17px',
      color: '#787878',
      marginLeft: 4
    }
  }, it.meta) : null))));
}
Object.assign(__ds_scope, { LinkList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LinkList.jsx", error: String((e && e.message) || e) }); }

// components/content/Pullquote.jsx
try { (() => {
function Pullquote({
  quote,
  author,
  role,
  image,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      wordWrap: 'break-word',
      borderTop: '1px solid #e5e5e5',
      borderBottom: '1px solid #e5e5e5',
      padding: '24px 0',
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: 700,
      color: '#333',
      margin: '0 0 16px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "loop loop-quote-left",
    "aria-hidden": "true",
    style: {
      fontSize: 16,
      color: '#0071bc',
      marginRight: 8,
      verticalAlign: 'top'
    }
  }), quote), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      color: '#787878'
    }
  }, author ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, author) : null, role ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: 'italic'
    }
  }, role) : null)), image ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      padding: 4,
      border: '1px solid #d4d4d4',
      borderRadius: '100%',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 60,
      height: 60,
      borderRadius: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })) : null);
}
Object.assign(__ds_scope, { Pullquote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Pullquote.jsx", error: String((e && e.message) || e) }); }

// components/content/Synopsis.jsx
try { (() => {
function Synopsis({
  title = 'Synopsis',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #02A1B6',
      background: '#f6f6f6',
      padding: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      fontWeight: 700,
      textTransform: 'capitalize',
      color: '#333',
      margin: '0 0 16px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: '29px',
      fontStyle: 'italic',
      color: '#717171'
    }
  }, children));
}
Object.assign(__ds_scope, { Synopsis });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Synopsis.jsx", error: String((e && e.message) || e) }); }

// components/content/Tweetable.jsx
try { (() => {
function Tweetable({
  children,
  href = '#',
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: h ? '#0071bc' : '#d9ecfd',
      color: h ? '#fff' : '#333',
      padding: 2,
      textDecoration: 'none',
      transition: 'all 0.1545s ease-in-out',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("i", {
    className: "loop loop-twitter",
    "aria-hidden": "true",
    style: {
      color: h ? '#fff' : '#009fda',
      fontSize: 18,
      padding: '0 4px',
      verticalAlign: 'middle'
    }
  }));
}
Object.assign(__ds_scope, { Tweetable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tweetable.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '4px 8px',
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 700,
      lineHeight: 1,
      color: '#787878',
      background: '#f6f6f6',
      borderRadius: 0,
      verticalAlign: 'middle',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  lg: {
    fontSize: 14,
    lineHeight: '18px',
    minWidth: 160,
    padding: '24px 32px'
  },
  md: {
    fontSize: 12,
    lineHeight: '16px',
    minWidth: 140,
    padding: '16px 32px'
  },
  sm: {
    fontSize: 12,
    lineHeight: '16px',
    minWidth: 120,
    padding: '12px 24px'
  },
  xs: {
    fontSize: 11,
    lineHeight: '16px',
    minWidth: 100,
    padding: '8px 12px'
  }
};
const VARIANTS = {
  primary: [{
    color: '#fff',
    background: '#0071bc'
  }, {
    background: '#004c92'
  }],
  secondary: [{
    color: '#fff',
    background: '#787878'
  }, {
    background: '#333333'
  }],
  orange: [{
    color: '#fff',
    background: '#ec553a'
  }, {
    background: '#cd2c0f'
  }],
  navy: [{
    color: '#fff',
    background: '#002245'
  }, {
    background: '#013367'
  }],
  inverse: [{
    color: '#0071bc',
    background: '#fff'
  }, {
    color: '#004c92'
  }],
  ghost: [{
    color: '#fff',
    background: 'transparent',
    borderColor: '#fff'
  }, {
    background: 'rgba(255,255,255,0.2)'
  }],
  ghostInverse: [{
    color: '#fff',
    background: 'rgba(0,0,0,0.1)',
    borderColor: '#fff'
  }, {
    background: 'rgba(0,0,0,0.4)'
  }]
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  block = false,
  icon,
  href,
  children,
  onClick,
  style,
  type = 'button',
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [base, hover] = VARIANTS[variant] || VARIANTS.primary;
  const s = {
    fontFamily: 'var(--font-body)',
    display: block ? 'block' : 'inline-block',
    width: block ? '100%' : undefined,
    textAlign: 'center',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    letterSpacing: '.78px',
    textTransform: 'uppercase',
    border: '1px solid transparent',
    fontWeight: 600,
    borderRadius: 0,
    cursor: disabled ? 'default' : 'pointer',
    textDecoration: 'none',
    boxSizing: 'border-box',
    margin: 0,
    ...SIZES[size],
    ...base,
    ...(h && !disabled ? hover : null),
    ...(disabled ? {
      color: '#fff',
      background: '#d4d4d4',
      borderColor: 'transparent'
    } : null),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: s
  }, rest), icon ? /*#__PURE__*/React.createElement("i", {
    className: 'loop loop-' + icon,
    "aria-hidden": "true",
    style: {
      marginRight: 8,
      fontSize: '1em'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CtaButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  white: [{
    color: '#0071bc',
    background: '#fff'
  }, {
    color: '#004c92'
  }],
  blue: [{
    color: '#fff',
    background: '#0079aa'
  }, {
    color: '#004c92',
    background: '#fff'
  }],
  gray: [{
    color: '#0071bc',
    background: '#f6f6f6'
  }, {
    color: '#004c92'
  }],
  gradient: [{
    color: '#fff',
    background: 'rgba(51,51,51,0.8)'
  }, {}],
  link: [{
    color: '#0071bc',
    background: 'transparent',
    padding: 0,
    minWidth: 0
  }, {
    color: '#004c92'
  }]
};
function CtaButton({
  variant = 'white',
  href,
  children,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [b, hv] = V[variant] || V.white;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href || '#',
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'var(--font-body)',
      display: 'inline-block',
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 600,
      letterSpacing: '.78px',
      textTransform: 'capitalize',
      padding: '12px 24px',
      minWidth: 120,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      border: '1px solid transparent',
      borderRadius: 0,
      textDecoration: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box',
      ...b,
      ...(h ? hv : null),
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("i", {
    className: "loop loop-chevron-right",
    "aria-hidden": "true",
    style: {
      fontSize: 10,
      lineHeight: '18px',
      marginLeft: 3,
      verticalAlign: 'middle',
      fontWeight: 'normal'
    }
  }));
}
Object.assign(__ds_scope, { CtaButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CtaButton.jsx", error: String((e && e.message) || e) }); }

// components/banners/Banner.jsx
try { (() => {
const T = {
  fontFamily: 'var(--font-display)',
  textTransform: 'uppercase',
  fontWeight: 400,
  margin: '0 0 16px',
  color: '#fff',
  fontSize: '2.5rem',
  lineHeight: '2.75rem'
};
const D = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.5rem',
  lineHeight: '1.75rem',
  color: '#fff',
  margin: '0 0 16px'
};
function Banner({
  variant = 'landing',
  image,
  title,
  description,
  ctas = [],
  circleImage,
  height,
  style
}) {
  const [h, setH] = React.useState(false);
  if (variant === 'topic') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: '#333',
        height: height || 310,
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "",
      style: {
        position: 'absolute',
        inset: -30,
        width: 'calc(100% + 60px)',
        height: 'calc(100% + 60px)',
        objectFit: 'cover',
        filter: 'blur(15px)',
        opacity: 0.8
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 2,
        maxWidth: 1170,
        margin: '0 auto',
        padding: '32px 15px',
        display: 'flex',
        alignItems: 'center',
        gap: 32,
        height: '100%',
        boxSizing: 'border-box'
      }
    }, circleImage ? /*#__PURE__*/React.createElement("img", {
      src: circleImage,
      alt: "",
      style: {
        width: 150,
        height: 150,
        borderRadius: '100%',
        objectFit: 'cover',
        flex: 'none'
      }
    }) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        ...T
      }
    }, title), description ? /*#__PURE__*/React.createElement("p", {
      style: {
        ...D,
        fontSize: '1.25rem'
      }
    }, description) : null)));
  }
  if (variant === 'homepage') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        height: height || 450,
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }), /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        maxWidth: 1170,
        margin: '0 auto',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(0,0,0,0.7)',
        padding: 32,
        minHeight: h ? 260 : 120,
        transition: 'all 0.3s ease',
        maxWidth: 780,
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        ...T,
        textTransform: 'none',
        fontSize: '2.25rem',
        lineHeight: '2.5rem'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: h ? 200 : 0,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: h ? 'translateY(0)' : 'translateY(10px)'
      }
    }, description ? /*#__PURE__*/React.createElement("p", {
      style: {
        ...D,
        fontSize: '1.25rem',
        paddingRight: 32
      }
    }, description) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, ctas.map((c, i) => /*#__PURE__*/React.createElement(__ds_scope.CtaButton, {
      key: i,
      variant: "gradient"
    }, c)))))));
  }
  if (variant === 'campaign') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1440,
        margin: '0 auto',
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: title || '',
      style: {
        width: '100%',
        height: height || 600,
        objectFit: 'cover',
        display: 'block'
      }
    }));
  }
  const right = variant === 'landingRight';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#f6f6f6',
      height: height || 500,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,0.7) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 32,
      padding: 16,
      maxWidth: 1170,
      margin: '0 auto',
      textAlign: right ? 'left' : 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: right ? 'flex-end' : 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: right ? 480 : 900
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: T
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: D
  }, description) : null, ctas.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: right ? 'flex-start' : 'center'
    }
  }, ctas.map((c, i) => /*#__PURE__*/React.createElement(__ds_scope.CtaButton, {
    key: i,
    variant: "white"
  }, c))) : null)));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/banners/Banner.jsx", error: String((e && e.message) || e) }); }

// components/core/Hammer.jsx
try { (() => {
function Hammer({
  items = [],
  color = '#787878',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      color,
      margin: '0 0 8px',
      ...style
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: i < items.length - 1 ? {
      marginRight: 8,
      paddingRight: 8,
      borderRight: '1px solid #e5e5e5'
    } : null
  }, t)));
}
Object.assign(__ds_scope, { Hammer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Hammer.jsx", error: String((e && e.message) || e) }); }

// components/cards/ContentCard.jsx
try { (() => {
function ContentCard({
  image,
  imageHeight = 200,
  hammer,
  title,
  description,
  links,
  horizontalLinks = true,
  inverse = false,
  background,
  href,
  onClick,
  style
}) {
  const fg = inverse ? '#fff' : '#333';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: inverse ? background || '#0071bc' : '#fff',
      borderTop: inverse ? 0 : '1px solid #058a8f',
      boxShadow: inverse ? 'none' : '0px 2px 2px 1px #e5e5e5',
      cursor: onClick ? 'pointer' : undefined,
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: imageHeight,
      objectFit: 'cover',
      position: 'relative',
      top: -1
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, hammer ? /*#__PURE__*/React.createElement(__ds_scope.Hammer, {
    items: [].concat(hammer),
    color: inverse ? '#fff' : '#787878'
  }) : null, title ? /*#__PURE__*/React.createElement("h6", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
      color: fg,
      margin: '0 0 8px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    style: {
      color: fg,
      textDecoration: 'none'
    }
  }, title)) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      color: fg,
      margin: '0 0 10px'
    }
  }, description) : null, links && links.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      padding: 0,
      margin: '16px 0 0',
      listStyle: 'none',
      display: horizontalLinks ? 'flex' : 'block',
      flexWrap: 'wrap'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      margin: horizontalLinks ? 0 : '0 0 16px',
      ...(horizontalLinks && i < links.length - 1 ? {
        marginRight: 8,
        paddingRight: 8,
        borderRight: '1px solid #e5e5e5'
      } : null)
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: inverse ? '#fff' : '#0071bc',
      textDecoration: 'none'
    }
  }, l)))) : null));
}
Object.assign(__ds_scope, { ContentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ContentCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 16,
  color,
  style,
  title,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    className: 'loop loop-' + name,
    "aria-hidden": title ? undefined : 'true',
    title: title,
    style: {
      fontSize: size,
      color,
      lineHeight: 1,
      display: 'inline-block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  inverse = false,
  sortable = true,
  title,
  style
}) {
  const [sort, setSort] = React.useState(null);
  const sorted = React.useMemo(() => {
    if (!sort) return rows;
    const r = [...rows];
    r.sort((a, b) => {
      const x = a[sort.i],
        y = b[sort.i];
      const c = typeof x === 'number' ? x - y : String(x).localeCompare(String(y));
      return sort.dir * c;
    });
    return r;
  }, [rows, sort]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("h6", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
      color: '#333',
      margin: '0 0 16px'
    }
  }, title) : null, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      color: '#333',
      margin: '0 0 16px'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    onClick: () => sortable && setSort(s => ({
      i,
      dir: s && s.i === i ? -s.dir : 1
    })),
    style: {
      textAlign: 'left',
      verticalAlign: 'bottom',
      fontWeight: 700,
      padding: '8px 16px',
      cursor: sortable ? 'pointer' : 'default',
      background: inverse ? '#545454' : 'transparent',
      color: inverse ? '#fff' : '#333'
    }
  }, c, sortable ? /*#__PURE__*/React.createElement("i", {
    className: 'loop loop-angle-' + (sort && sort.i === i && sort.dir < 0 ? 'up' : 'down'),
    "aria-hidden": "true",
    style: {
      fontSize: 5,
      lineHeight: '12px',
      color: inverse ? '#fff' : '#0071bc',
      marginLeft: 4,
      verticalAlign: 'middle'
    }
  }) : null)))), /*#__PURE__*/React.createElement("tbody", null, sorted.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: i % 2 ? '#F5F7FC' : '#fff',
      boxShadow: i === 0 ? 'none' : '0px -1px 1px 0px #e5e5e5',
      borderTop: i === 0 ? '2px solid #787878' : undefined,
      borderBottom: i === sorted.length - 1 ? '1px solid #787878' : undefined
    }
  }, r.map((v, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      padding: '8px 12px',
      textAlign: 'left'
    }
  }, v)))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  inverse = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  const box = {
    position: 'relative',
    display: 'inline-block',
    flex: 'none',
    width: 20,
    height: 20,
    marginRight: 16,
    boxSizing: 'border-box',
    background: '#FAFDFF',
    border: '1px solid #D8E7F5',
    boxShadow: disabled ? 'none' : 'inset 0px 3px 0px 0px #F0F7FE'
  };
  if (on) Object.assign(box, inverse ? {
    background: '#fff',
    border: '1px solid #fff',
    boxShadow: 'inset 0px 1px 0px 0px #fff'
  } : {
    background: '#0071BC',
    boxShadow: 'inset 0px 3px 0px 0px #0071BC'
  });
  if (on && disabled && !inverse) Object.assign(box, {
    background: '#FAFDFF',
    border: '1px solid #D8E7F5',
    boxShadow: 'inset 0px 1px 0px 0px #F0F7FE'
  });
  const glyph = on && disabled && !inverse ? '#4cbb88' : inverse ? '#0071bc' : '#fff';
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      color: inverse ? '#fff' : '#333',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      margin: '0 0 16px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: box
  }, on ? /*#__PURE__*/React.createElement("i", {
    className: "loop loop-check",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 4,
      top: 4,
      fontSize: 9,
      color: glyph
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Dropdown.jsx
try { (() => {
const V = {
  primary: {
    toggle: {
      color: '#787878',
      background: '#fafcff',
      border: '1px solid #d8e7f5',
      boxShadow: 'inset 0 3px 0 #f0f7fe'
    },
    arrow: '#0071bc',
    menu: {
      background: '#fff',
      border: '2px solid #b6d9fa'
    },
    item: '#333',
    itemHover: {
      color: '#004c92'
    }
  },
  primaryInverse: {
    toggle: {
      color: '#787878',
      background: '#fff',
      border: '1px solid #e5e5e5',
      boxShadow: 'inset 0 3px 0 #f6f6f6'
    },
    arrow: '#0071bc',
    menu: {
      background: '#fff',
      border: '2px solid #e5e5e5'
    },
    item: '#333',
    itemHover: {
      color: '#004c92'
    }
  },
  secondary: {
    toggle: {
      color: '#fff',
      background: '#0071bc',
      border: '1px solid #0071bc'
    },
    arrow: '#fff',
    menu: {
      background: '#0071bc',
      border: '1px solid #0071bc'
    },
    item: '#fff',
    itemHover: {
      background: '#004c92'
    }
  },
  secondaryInverse: {
    toggle: {
      color: '#fff',
      background: '#0c5e9e',
      border: '1px solid #0c5e9e',
      boxShadow: 'inset 0 3px 0 #0c5e9e'
    },
    arrow: '#fff',
    menu: {
      background: '#0c5e9e',
      border: 0,
      borderTop: '1px solid #0071bc'
    },
    item: '#fff',
    itemHover: {
      background: '#004c92'
    }
  }
};
function Dropdown({
  variant = 'primary',
  options = [],
  value,
  onChange,
  placeholder = 'Select',
  label,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const [hi, setHi] = React.useState(-1);
  const v = V[variant] || V.primary;
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const cur = options.find(o => (o.value ?? o) === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      fontWeight: 700,
      color: '#333',
      margin: '0 0 8px'
    }
  }, label) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: 45,
      padding: '8px 16px',
      fontFamily: 'inherit',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      textAlign: 'left',
      borderRadius: 0,
      outline: 0,
      cursor: 'pointer',
      boxSizing: 'border-box',
      ...v.toggle
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, cur ? cur.label ?? cur : placeholder), /*#__PURE__*/React.createElement("i", {
    className: "loop loop-angle-down",
    "aria-hidden": "true",
    style: {
      fontSize: 8,
      color: v.arrow,
      transform: open ? 'rotate(180deg)' : 'none'
    }
  })), open ? /*#__PURE__*/React.createElement("ul", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      zIndex: 1000,
      listStyle: 'none',
      margin: 0,
      padding: '4px 0',
      maxHeight: 200,
      overflowY: 'auto',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      boxShadow: '0 6px 12px rgba(0,0,0,0.175)',
      boxSizing: 'border-box',
      ...v.menu
    }
  }, options.map((o, i) => {
    const val = o.value ?? o;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onMouseEnter: () => setHi(i),
      onMouseLeave: () => setHi(-1),
      onClick: e => {
        e.preventDefault();
        onChange && onChange(val);
        setOpen(false);
      },
      style: {
        display: 'block',
        padding: '8px 16px',
        color: v.item,
        textDecoration: 'none',
        ...(hi === i || val === value ? v.itemHover : null)
      }
    }, o.label ?? o));
  })) : null);
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false,
  inverse = false,
  name,
  style
}) {
  const ring = checked ? inverse ? {
    background: '#fff',
    border: '1px solid #333',
    boxShadow: 'inset 0px 1px 0px 0px #333'
  } : {
    background: '#fff',
    border: '1px solid #0071bc',
    boxShadow: 'none'
  } : {
    background: '#FAFDFF',
    border: '1px solid #D8E7F5',
    boxShadow: disabled ? 'none' : 'inset 0px 3px 0px 0px #F0F7FE'
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      color: inverse ? '#fff' : '#333',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      margin: '0 0 16px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "radio",
    "aria-checked": checked,
    "data-name": name,
    style: {
      position: 'relative',
      flex: 'none',
      display: 'inline-block',
      width: 22,
      height: 22,
      borderRadius: '100%',
      marginRight: 16,
      boxSizing: 'border-box',
      ...ring
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 5,
      top: 5,
      width: 10,
      height: 10,
      borderRadius: '100%',
      background: inverse ? '#333' : '#0071bc'
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    base: {
      fontWeight: 700,
      color: '#787878',
      background: '#fafdff',
      border: '1px solid #d8e7f5',
      boxShadow: 'inset 0px 2px 1px 0px #F0F7FE'
    },
    focus: {
      border: '2px solid #d8e7f5',
      background: '#fff'
    }
  },
  secondary: {
    base: {
      fontWeight: 400,
      color: '#787878',
      background: '#fff',
      border: '1px solid #d4d4d4',
      boxShadow: 'inset 0px 1px 2px 0px #d4d4d4'
    },
    focus: {
      border: '2px solid #d4d4d4'
    }
  },
  inverse: {
    base: {
      fontWeight: 600,
      color: '#fff',
      background: '#0071bc',
      border: '0px solid transparent',
      boxShadow: 'none'
    },
    focus: {
      color: '#0071bc',
      background: '#fafdff',
      border: '1px solid #d8e7f5',
      boxShadow: 'inset 0px 2px 1px 0px #F0F7FE'
    }
  }
};
function TextInput({
  variant = 'primary',
  label,
  labelInverse = false,
  placeholder,
  value,
  onChange,
  search = false,
  onSubmit,
  disabled = false,
  type = 'text',
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const v = V[variant] || V.primary;
  const iconColor = variant === 'inverse' && !f ? '#fff' : '#0071bc';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 0 16px',
      position: 'relative',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      fontWeight: 700,
      color: labelInverse ? '#fff' : '#333',
      margin: '0 0 8px'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: search ? 'search' : type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    onKeyDown: e => {
      if (e.key === 'Enter' && onSubmit) onSubmit(e.target.value);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      width: '100%',
      height: 45,
      padding: search ? '8px 48px 8px 16px' : '8px 16px',
      borderRadius: 0,
      WebkitAppearance: 'none',
      outline: 0,
      boxSizing: 'border-box',
      ...v.base,
      ...(f ? v.focus : null)
    }
  }, rest)), search ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Search",
    onClick: () => onSubmit && onSubmit(value),
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: 45,
      width: 45,
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "loop loop-search",
    "aria-hidden": "true",
    style: {
      fontSize: 14,
      color: iconColor
    }
  })) : null));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '8px 16px',
      margin: 0,
      listStyle: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      lineHeight: '1.0625rem',
      fontWeight: 600,
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'inline-block'
      }
    }, i > 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '0 4px',
        color: '#787878'
      }
    }, "/ ") : null, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#787878',
        fontWeight: 400
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      onClick: it.onClick,
      style: {
        color: '#0071bc',
        textDecoration: 'none'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlobalNav.jsx
try { (() => {
function NavItem({
  item,
  onSelect
}) {
  const [h, setH] = React.useState(false);
  const mm = item.megamenu;
  const on = h || item.active;
  return /*#__PURE__*/React.createElement("li", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      listStyle: 'none',
      position: 'static'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: item.href || '#',
    onClick: e => {
      if (onSelect) {
        e.preventDefault();
        onSelect(item);
      }
    },
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      lineHeight: '16px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: on ? '#002245' : '#0071BC',
      padding: '0 0 8px',
      margin: '0 16px',
      borderBottom: on ? '3px solid #002245' : '3px solid transparent',
      position: 'relative'
    }
  }, item.label), mm && h ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: '#f6f6f6',
      borderTop: '1px solid #e5e5e5',
      boxShadow: '0 4px 4px rgba(0,0,0,0.4)',
      zIndex: 10,
      display: 'flex',
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 33.333%',
      background: '#e5e5e5',
      padding: 32,
      fontFamily: 'var(--font-display)',
      fontSize: '1.125rem',
      lineHeight: '1.625rem',
      color: '#333',
      boxSizing: 'border-box'
    }
  }, mm.blurb), (mm.columns || []).map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      padding: '32px 16px 24px'
    }
  }, col.title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      fontWeight: 700,
      color: '#333',
      margin: '0 4px 8px'
    }
  }, col.title) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '8px 0',
      padding: 0
    }
  }, col.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      listStyle: 'none'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      color: '#0071bc',
      padding: '0 4px',
      margin: '0 0 8px',
      textDecoration: 'none'
    }
  }, l))))))) : null);
}
function GlobalNav({
  brand = 'World Bank Group',
  items = [],
  onSelect,
  onSearch,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'relative',
      minHeight: 60,
      background: '#fff',
      borderBottom: '1px solid #e5e5e5',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '0 15px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      padding: 16,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '28px',
      color: '#002245',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(NavItem, {
    key: i,
    item: it,
    onSelect: onSelect
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Search",
    onClick: onSearch,
    style: {
      border: 0,
      background: 'transparent',
      padding: '0 16px 8px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "loop loop-search",
    "aria-hidden": "true",
    style: {
      fontSize: 14,
      color: '#0071BC'
    }
  }))));
}
Object.assign(__ds_scope, { GlobalNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlobalNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LeftNav.jsx
try { (() => {
function Row({
  label,
  active,
  sub,
  onClick
}) {
  const [h, setH] = React.useState(false);
  const on = h || active;
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'block',
      padding: sub ? '16px 8px 16px 32px' : '16px 8px',
      color: on ? '#004c92' : '#0071bc',
      fontWeight: on ? 700 : 400,
      textDecoration: 'none'
    }
  }, label);
}
function LeftNav({
  items = [],
  activeId,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '17px',
      wordWrap: 'break-word',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      listStyle: 'none',
      borderTop: i === 0 ? 0 : '1px solid #e5e5e5'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: it.label,
    active: it.id === activeId,
    onClick: () => onSelect && onSelect(it.id)
  }), it.children && it.children.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0
    }
  }, it.children.map((c, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      listStyle: 'none',
      borderTop: '1px solid #e5e5e5'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    sub: true,
    label: c.label,
    active: c.id === activeId,
    onClick: () => onSelect && onSelect(c.id)
  })))) : null)));
}
Object.assign(__ds_scope, { LeftNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LeftNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style
}) {
  const go = p => e => {
    e.preventDefault();
    if (p >= 1 && p <= total && onChange) onChange(p);
  };
  const link = {
    color: '#0071bc',
    textDecoration: 'none'
  };
  const pages = [];
  for (let i = 1; i <= total; i++) pages.push(i);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: 600,
      color: '#0071bc',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go(page - 1),
    style: {
      ...link,
      padding: '16px 0',
      color: page === 1 ? '#d4d4d4' : '#0071bc'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "loop loop-angle-left",
    "aria-hidden": "true",
    style: {
      fontSize: 10,
      paddingRight: 4
    }
  }), "Previous"), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      margin: 0,
      padding: 0
    }
  }, pages.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      listStyle: 'none',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go(p),
    style: {
      ...link,
      color: p === page ? '#333333' : '#0071bc'
    }
  }, p)))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go(page + 1),
    style: {
      ...link,
      padding: '16px 0',
      color: page === total ? '#d4d4d4' : '#0071bc'
    }
  }, "Next", /*#__PURE__*/React.createElement("i", {
    className: "loop loop-angle-right",
    "aria-hidden": "true",
    style: {
      fontSize: 10,
      paddingLeft: 4
    }
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active = 0,
  onChange,
  style
}) {
  const [h, setH] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid #e5e5e5',
      marginBottom: 32,
      ...style
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      margin: 0,
      padding: 0,
      gap: 16
    }
  }, tabs.map((t, i) => {
    const on = i === active || i === h;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        listStyle: 'none'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onMouseEnter: () => setH(i),
      onMouseLeave: () => setH(-1),
      onClick: e => {
        e.preventDefault();
        onChange && onChange(i);
      },
      style: {
        display: 'block',
        position: 'relative',
        top: 1,
        padding: '8px 16px',
        minWidth: 140,
        textAlign: 'center',
        boxSizing: 'border-box',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: '24px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: on ? '#004c92' : '#0071bc',
        borderBottom: on ? '3px solid #004c92' : '3px solid transparent',
        cursor: i === active ? 'default' : 'pointer'
      }
    }, t));
  })));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/worldbank-site/HomeScreen.jsx
try { (() => {
function HomeScreen({
  go
}) {
  const {
    Banner,
    ContentCard,
    StatCard,
    InlineApiItem,
    CtaButton,
    FocusCard,
    Button
  } = window.WorldBankGroupDesignSystem_53b2b3;
  const I = '../../assets/images/';
  const D = window.WB_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Banner, {
    variant: "homepage",
    image: I + 'faces.png',
    title: "Ending poverty on a livable planet",
    description: "The World Bank Group works with countries to end extreme poverty and boost shared prosperity.",
    ctas: ['Our mission', 'Annual Report 2024']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1170,
      margin: '0 auto',
      padding: '64px 15px 32px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      margin: '0 0 32px'
    }
  }, "Featured"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(ContentCard, {
    onClick: () => go('story'),
    image: I + 'farmers.png',
    hammer: ['Feature Story', 'June 5, 2024'],
    title: "Digital skills help rural entrepreneurs reach new markets",
    description: "Training programs are connecting farmers to online buyers and financial services."
  }), /*#__PURE__*/React.createElement(ContentCard, {
    image: I + 'hq.png',
    hammer: ['Event', 'October 2024'],
    title: "Annual Meetings 2024",
    description: "Central bankers, ministers and civil society convene to discuss the global economy.",
    links: ['Schedule', 'Watch live']
  }), /*#__PURE__*/React.createElement(ContentCard, {
    image: I + 'gep-cover.png',
    imageHeight: 200,
    hammer: ['Publication', 'June 2024'],
    title: "Global Economic Prospects",
    description: "The global economy is stabilizing, but growth remains weak by historical standards.",
    links: ['Download', 'Data']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#f6f6f6'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1170,
      margin: '0 auto',
      padding: '64px 15px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '2rem',
      lineHeight: '2.25rem',
      margin: '0 0 32px'
    }
  }, "Latest news"), D.news.slice(0, 3).map((n, i) => /*#__PURE__*/React.createElement(InlineApiItem, {
    key: i,
    primary: true,
    meta: n.meta,
    title: n.title,
    href: "#"
  })), /*#__PURE__*/React.createElement(CtaButton, {
    variant: "link",
    onClick: e => {
      e.preventDefault();
      go('search');
    }
  }, "See all news")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 30,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "financial-1",
    value: "$117.5B",
    label: "committed in fiscal year 2024",
    links: ['Results']
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "clean-water-1",
    background: "#002245",
    value: "36.2M",
    label: "people with improved water sources"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1170,
      margin: '0 auto',
      padding: '64px 15px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '2rem',
      lineHeight: '2.25rem',
      margin: '0 0 32px'
    }
  }, "What we do"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go('topic')
  }, /*#__PURE__*/React.createElement(FocusCard, {
    image: I + 'classroom.png',
    title: "Education",
    description: "Helping countries deliver learning for every child."
  })), /*#__PURE__*/React.createElement(FocusCard, {
    image: I + 'bicycle.png',
    title: "Transport",
    description: "Connecting people to jobs, markets and services."
  }), /*#__PURE__*/React.createElement(FocusCard, {
    image: I + 'farmers.png',
    title: "Digital Development",
    description: "Expanding affordable access to the internet."
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/worldbank-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/worldbank-site/SearchScreen.jsx
try { (() => {
function SearchScreen({
  go
}) {
  const {
    TextInput,
    Checkbox,
    Radio,
    InlineApiItem,
    Pagination,
    Button,
    Breadcrumb
  } = window.WorldBankGroupDesignSystem_53b2b3;
  const D = window.WB_DATA;
  const [q, setQ] = React.useState('economy');
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState('relevance');
  const [types, setTypes] = React.useState({
    'Press Release': true,
    'Feature Story': true,
    'Publication': true,
    'Speeches & Transcripts': true
  });
  const res = D.news.filter(n => types[n.meta[0]]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1170,
      margin: '0 auto',
      padding: '0 15px 64px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      onClick: e => {
        e.preventDefault();
        go('home');
      }
    }, {
      label: 'Search'
    }],
    style: {
      padding: '16px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#f6f6f6',
      padding: 16,
      marginBottom: 32,
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    variant: "secondary",
    search: true,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search worldbank.org",
    style: {
      flex: 1,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    style: {
      height: 45
    }
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '240px minmax(0,1fr)',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      color: '#787878',
      borderBottom: '1px solid #e5e5e5',
      margin: '0 0 16px'
    }
  }, "Content type"), Object.keys(types).map(t => /*#__PURE__*/React.createElement(Checkbox, {
    key: t,
    label: t,
    checked: types[t],
    onChange: v => setTypes({
      ...types,
      [t]: v
    }),
    style: {
      fontSize: 14
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      color: '#787878',
      borderBottom: '1px solid #e5e5e5',
      margin: '16px 0'
    }
  }, "Sort by"), /*#__PURE__*/React.createElement(Radio, {
    label: "Relevance",
    checked: sort === 'relevance',
    onChange: () => setSort('relevance'),
    style: {
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "Most recent",
    checked: sort === 'date',
    onChange: () => setSort('date'),
    style: {
      fontSize: 14
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8125rem',
      lineHeight: '1.0625rem',
      color: '#787878',
      margin: '0 0 24px'
    }
  }, res.length, " results for \u201C", q, "\u201D"), res.map((n, i) => /*#__PURE__*/React.createElement(InlineApiItem, {
    key: i,
    primary: true,
    meta: n.meta,
    title: n.title,
    description: n.description,
    href: "#",
    onClick: () => go('story')
  })), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 4,
    onChange: setPage
  }))));
}
window.SearchScreen = SearchScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/worldbank-site/SearchScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/worldbank-site/StoryScreen.jsx
try { (() => {
function StoryScreen({
  go
}) {
  const {
    Breadcrumb,
    Hammer,
    Pullquote,
    Tweetable,
    Badge,
    Button,
    ImageOverlayCard,
    Icon
  } = window.WorldBankGroupDesignSystem_53b2b3;
  const I = '../../assets/images/';
  const P = {
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    lineHeight: '1.8125rem',
    color: '#333',
    margin: '0 0 16px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1170,
      margin: '0 auto',
      padding: '0 15px 64px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      onClick: e => {
        e.preventDefault();
        go('home');
      }
    }, {
      label: 'News'
    }, {
      label: 'Feature Story'
    }],
    style: {
      padding: '16px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 770,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Hammer, {
    items: ['Feature Story', 'June 5, 2024']
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '2.5rem',
      lineHeight: '2.75rem',
      margin: '0 0 16px'
    }
  }, "Digital Skills Help Rural Entrepreneurs Reach New Markets"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      margin: '0 0 32px',
      color: '#0071bc'
    }
  }, ['facebook', 'twitter', 'linkedin', 'envelope', 'print'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 16
  }))))), /*#__PURE__*/React.createElement("img", {
    src: I + 'farmers.png',
    alt: "",
    style: {
      width: '100%',
      height: 500,
      objectFit: 'cover',
      display: 'block',
      margin: '0 0 8px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8125rem',
      lineHeight: '1.0625rem',
      color: '#787878',
      margin: '0 0 32px',
      textAlign: 'right'
    }
  }, "Photo: World Bank"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 770,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...P,
      fontSize: '1.25rem',
      lineHeight: '2rem',
      color: '#545454'
    }
  }, "STORY HIGHLIGHTS \u2014 A training program has reached thousands of small producers, helping them sell online and access digital payments."), /*#__PURE__*/React.createElement("p", {
    style: P
  }, "In rural counties, small producers have traditionally depended on intermediaries to reach buyers. ", /*#__PURE__*/React.createElement(Tweetable, null, "Digital skills training is helping farmers set their own prices and reach customers directly.")), /*#__PURE__*/React.createElement("p", {
    style: P
  }, "The program combines hands-on coaching at local service centers with support for e-commerce listings, logistics, and mobile payments."), /*#__PURE__*/React.createElement(Pullquote, {
    style: {
      margin: '32px 0'
    },
    quote: "Before, I sold only in the village market. Now buyers from the city order from me every week.",
    author: "Program participant",
    role: "Farmer and entrepreneur",
    image: I + 'farmers.png'
  }), /*#__PURE__*/React.createElement("p", {
    style: P
  }, "The approach is now being adapted for other regions, with a focus on women-led enterprises and young people."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      margin: '32px 0'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Digital Development"), /*#__PURE__*/React.createElement(Badge, null, "Agriculture"), /*#__PURE__*/React.createElement(Badge, null, "Jobs"))), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.75rem',
      lineHeight: '2rem',
      margin: '32px 0'
    }
  }, "Related"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(ImageOverlayCard, {
    image: I + 'bicycle.png',
    hammer: "Feature Story",
    title: "Better roads, better lives",
    description: "Rural roads cut travel times to markets and clinics."
  }), /*#__PURE__*/React.createElement(ImageOverlayCard, {
    image: I + 'classroom.png',
    hammer: "Feature Story",
    title: "Learning recovery in action",
    description: "Structured pedagogy is helping children catch up."
  }), /*#__PURE__*/React.createElement(ImageOverlayCard, {
    image: I + 'hq.png',
    hammer: "Video",
    title: "Inside the Annual Meetings",
    description: "Highlights from the week in Washington."
  })));
}
window.StoryScreen = StoryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/worldbank-site/StoryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/worldbank-site/TopicScreen.jsx
try { (() => {
function TopicScreen({
  go
}) {
  const {
    Banner,
    Breadcrumb,
    Tabs,
    LeftNav,
    Synopsis,
    LinkList,
    Expert,
    DataTable,
    Dropdown,
    Hammer
  } = window.WorldBankGroupDesignSystem_53b2b3;
  const I = '../../assets/images/';
  const [tab, setTab] = React.useState(0);
  const [nav, setNav] = React.useState('overview');
  const [region, setRegion] = React.useState('All regions');
  const rows = [['Africa', '5,824', '24,610', 212], ['East Asia and Pacific', '8,612', '1,742', 96], ['Europe and Central Asia', '6,113', '512', 71], ['Latin America and Caribbean', '9,407', '684', 88], ['South Asia', '4,322', '7,510', 104]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Banner, {
    variant: "topic",
    image: I + 'classroom.png',
    circleImage: I + 'classroom.png',
    title: "Education",
    description: "Overview"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1170,
      margin: '0 auto',
      padding: '0 15px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      onClick: e => {
        e.preventDefault();
        go('home');
      }
    }, {
      label: 'Topics'
    }, {
      label: 'Education'
    }],
    style: {
      padding: '16px 0'
    }
  }), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Overview', 'Strategy', 'Results', 'Projects'],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '240px minmax(0,1fr)',
      gap: 30,
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement(LeftNav, {
    activeId: nav,
    onSelect: setNav,
    items: [{
      id: 'overview',
      label: 'Education overview'
    }, {
      id: 'ece',
      label: 'Early Childhood Development'
    }, {
      id: 'teachers',
      label: 'Teachers',
      children: [{
        id: 't1',
        label: 'Coach program'
      }, {
        id: 't2',
        label: 'Teach tool'
      }]
    }, {
      id: 'tertiary',
      label: 'Tertiary Education'
    }, {
      id: 'data',
      label: 'Education Statistics'
    }]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hammer, {
    items: ['Overview', 'Last updated: Apr 11, 2024']
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '1.25rem',
      lineHeight: '2rem',
      color: '#545454',
      margin: '0 0 32px'
    }
  }, "Education is a human right, a powerful driver of development, and one of the strongest instruments for reducing poverty and improving health, gender equality, peace, and stability."), /*#__PURE__*/React.createElement(Synopsis, {
    title: "Key facts",
    style: {
      marginBottom: 32
    }
  }, "Seven in ten 10-year-olds in low- and middle-income countries cannot read and understand a simple text."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h6", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
      margin: 0
    }
  }, "Lending by region, FY24"), /*#__PURE__*/React.createElement(Dropdown, {
    options: ['All regions', 'Africa', 'South Asia'],
    value: region,
    onChange: setRegion,
    style: {
      width: 240
    }
  })), /*#__PURE__*/React.createElement(DataTable, {
    columns: ['Region', 'IBRD ($M)', 'IDA ($M)', 'Projects'],
    rows: region === 'All regions' ? rows : rows.filter(r => r[0] === region)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 30,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(LinkList, {
    heading: "Downloads",
    items: [{
      icon: 'file-pdf',
      label: 'Education strategy',
      meta: '(PDF, 3.1 MB)'
    }, {
      icon: 'file-excel',
      label: 'Education statistics',
      meta: '(XLS)'
    }, {
      icon: 'file-text',
      label: 'Learning poverty brief'
    }]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      fontWeight: 600,
      margin: '0 0 16px'
    }
  }, "Experts"), /*#__PURE__*/React.createElement(Expert, {
    variant: "stack",
    name: "Expert Name",
    role: "Global Director, Education",
    image: I + 'faces.png',
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement(Expert, {
    variant: "stack",
    name: "Expert Name",
    role: "Lead Economist",
    image: I + 'farmers.png'
  })))))));
}
window.TopicScreen = TopicScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/worldbank-site/TopicScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/worldbank-site/data.js
try { (() => {
window.WB_DATA = {
  nav: [{
    label: 'Who We Are',
    megamenu: {
      blurb: 'The World Bank Group is one of the world’s largest sources of funding and knowledge for developing countries.',
      columns: [{
        title: 'About',
        links: ['History', 'Leadership', 'Organization', 'Annual Report']
      }, {
        title: 'Institutions',
        links: ['IBRD', 'IDA', 'IFC', 'MIGA', 'ICSID']
      }]
    }
  }, {
    label: 'What We Do',
    id: 'topic',
    megamenu: {
      blurb: 'We provide financing, policy advice, and technical assistance to governments of developing countries.',
      columns: [{
        title: 'Topics',
        links: ['Climate Change', 'Education', 'Energy', 'Health', 'Water']
      }, {
        title: 'Products',
        links: ['Projects & Operations', 'Research & Publications', 'Open Data']
      }]
    }
  }, {
    label: 'Where We Work'
  }, {
    label: 'Understanding Poverty'
  }, {
    label: 'News',
    id: 'story'
  }, {
    label: 'Work With Us'
  }],
  news: [{
    meta: ['Press Release', 'June 11, 2024'],
    title: 'Global Economy Set to Stabilize for First Time in Three Years',
    description: 'Growth is expected to hold steady at 2.6 percent this year, before edging up to an average of 2.7 percent in 2025–26.'
  }, {
    meta: ['Feature Story', 'June 5, 2024'],
    title: 'Digital Skills Help Rural Entrepreneurs Reach New Markets',
    description: 'Training programs are connecting farmers to online buyers and financial services.'
  }, {
    meta: ['Speeches & Transcripts', 'May 28, 2024'],
    title: 'Remarks at the Development Committee Plenary',
    description: 'Remarks on the evolution of the World Bank Group and the path to a livable planet.'
  }, {
    meta: ['Publication', 'May 14, 2024'],
    title: 'Poverty, Prosperity, and Planet Report 2024',
    description: 'A new report takes stock of progress on reducing poverty and inequality and improving sustainability.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/worldbank-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.ContentCard = __ds_scope.ContentCard;

__ds_ns.FocusCard = __ds_scope.FocusCard;

__ds_ns.ImageOverlayCard = __ds_scope.ImageOverlayCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Expert = __ds_scope.Expert;

__ds_ns.InlineApiItem = __ds_scope.InlineApiItem;

__ds_ns.LinkList = __ds_scope.LinkList;

__ds_ns.Pullquote = __ds_scope.Pullquote;

__ds_ns.Synopsis = __ds_scope.Synopsis;

__ds_ns.Tweetable = __ds_scope.Tweetable;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CtaButton = __ds_scope.CtaButton;

__ds_ns.Hammer = __ds_scope.Hammer;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.GlobalNav = __ds_scope.GlobalNav;

__ds_ns.LeftNav = __ds_scope.LeftNav;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
