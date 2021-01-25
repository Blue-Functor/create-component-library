import React from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".button_storybook-button__Lre7g {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.button_storybook-button--primary__1M8Kt {\n  color: white;\n  background-color: #1ea7fd;\n}\n.button_storybook-button--secondary__12QKM {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.button_storybook-button--small__3sSXp {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.button_storybook-button--medium__1YgU0 {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.button_storybook-button--large__10sYE {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n";
styleInject(css_248z);

var Button = function Button(_ref) {
  var _ref$primary = _ref.primary,
      primary = _ref$primary === void 0 ? false : _ref$primary,
      backgroundColor = _ref.backgroundColor,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["primary", "backgroundColor", "size", "label"]);

  var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ['storybook-button', "storybook-button--".concat(size), mode].join(' '),
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, props), label);
};

export { Button };
