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

var css_248z = ".styles_container__3Ailr {\n    width: 100vw;\n    display: block;\n}\n\n.styles_link__3oQ2n {\n    text-decoration: none;\n    color: #1ea7fd;\n}\n\n.styles_paragraph__39Rxh {\n    font-size: 12pt;\n    margin-bottom: 4px;\n}\n\n.styles_code__2tsUf {\n    display: inline-block;\n    font-size: 12pt;\n    background-color: #000000;\n    color: rgba(255,255,255,0.75);\n    border-radius: 5px;\n    padding: 12px;\n}\n";
styleInject(css_248z);

var Description = function Description(_ref) {
  var name = _ref.name,
      description = _ref.description,
      packageUrl = _ref.packageUrl,
      installCommand = _ref.installCommand,
      body = _ref.body;
  return /*#__PURE__*/React.createElement("div", {
    className: 'container'
  }, /*#__PURE__*/React.createElement("h3", null, description), name && packageUrl && /*#__PURE__*/React.createElement("p", {
    className: 'paragraph'
  }, "Install ", /*#__PURE__*/React.createElement("strong", null, name), " as a ", /*#__PURE__*/React.createElement("a", {
    className: 'link',
    href: packageUrl,
    target: '_blanc'
  }, "package")), /*#__PURE__*/React.createElement("code", {
    className: 'code'
  }, installCommand), /*#__PURE__*/React.createElement("p", null, body));
};

var generateStory = function generateStory(_ref) {
  var Template = _ref.Template,
      props = _ref.props,
      description = _ref.description;
  var Story = Template.bind({});
  Story.args = props;
  Story.parameters = {
    docs: {
      description: {
        story: description
      },
      source: {// code: 'Some custom string here',
        // type: 'code',
      }
    }
  };
  return Story;
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var createMainStory = function createMainStory(_ref) {
  var title = _ref.title,
      component = _ref.component,
      description = _ref.description,
      argTypes = _ref.argTypes,
      options = _ref.options;
  return _objectSpread2({
    title: title,
    component: component,
    parameters: {
      componentSubtitle: description
    },
    argTypes: argTypes
  }, options);
};

var generateSubstories = function generateSubstories(Template) {
  for (var _len = arguments.length, stories = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    stories[_key - 1] = arguments[_key];
  }

  return stories.reduce(function (substories, story) {
    return _objectSpread2(_objectSpread2({}, substories), {}, _defineProperty({}, story.name, generateStory(_objectSpread2({
      Template: Template
    }, story))));
  }, {});
};

export { Description, createMainStory, generateStory, generateSubstories };
