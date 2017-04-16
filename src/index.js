const XHTMLEntities = {
  quot: "\u0022",
  amp: "&",
  apos: "\u0027",
  lt: "<",
  gt: ">",
  nbsp: "\u00A0",
  iexcl: "\u00A1",
  cent: "\u00A2",
  pound: "\u00A3",
  curren: "\u00A4",
  yen: "\u00A5",
  brvbar: "\u00A6",
  sect: "\u00A7",
  uml: "\u00A8",
  copy: "\u00A9",
  ordf: "\u00AA",
  laquo: "\u00AB",
  not: "\u00AC",
  shy: "\u00AD",
  reg: "\u00AE",
  macr: "\u00AF",
  deg: "\u00B0",
  plusmn: "\u00B1",
  sup2: "\u00B2",
  sup3: "\u00B3",
  acute: "\u00B4",
  micro: "\u00B5",
  para: "\u00B6",
  middot: "\u00B7",
  cedil: "\u00B8",
  sup1: "\u00B9",
  ordm: "\u00BA",
  raquo: "\u00BB",
  frac14: "\u00BC",
  frac12: "\u00BD",
  frac34: "\u00BE",
  iquest: "\u00BF",
  Agrave: "\u00C0",
  Aacute: "\u00C1",
  Acirc: "\u00C2",
  Atilde: "\u00C3",
  Auml: "\u00C4",
  Aring: "\u00C5",
  AElig: "\u00C6",
  Ccedil: "\u00C7",
  Egrave: "\u00C8",
  Eacute: "\u00C9",
  Ecirc: "\u00CA",
  Euml: "\u00CB",
  Igrave: "\u00CC",
  Iacute: "\u00CD",
  Icirc: "\u00CE",
  Iuml: "\u00CF",
  ETH: "\u00D0",
  Ntilde: "\u00D1",
  Ograve: "\u00D2",
  Oacute: "\u00D3",
  Ocirc: "\u00D4",
  Otilde: "\u00D5",
  Ouml: "\u00D6",
  times: "\u00D7",
  Oslash: "\u00D8",
  Ugrave: "\u00D9",
  Uacute: "\u00DA",
  Ucirc: "\u00DB",
  Uuml: "\u00DC",
  Yacute: "\u00DD",
  THORN: "\u00DE",
  szlig: "\u00DF",
  agrave: "\u00E0",
  aacute: "\u00E1",
  acirc: "\u00E2",
  atilde: "\u00E3",
  auml: "\u00E4",
  aring: "\u00E5",
  aelig: "\u00E6",
  ccedil: "\u00E7",
  egrave: "\u00E8",
  eacute: "\u00E9",
  ecirc: "\u00EA",
  euml: "\u00EB",
  igrave: "\u00EC",
  iacute: "\u00ED",
  icirc: "\u00EE",
  iuml: "\u00EF",
  eth: "\u00F0",
  ntilde: "\u00F1",
  ograve: "\u00F2",
  oacute: "\u00F3",
  ocirc: "\u00F4",
  otilde: "\u00F5",
  ouml: "\u00F6",
  divide: "\u00F7",
  oslash: "\u00F8",
  ugrave: "\u00F9",
  uacute: "\u00FA",
  ucirc: "\u00FB",
  uuml: "\u00FC",
  yacute: "\u00FD",
  thorn: "\u00FE",
  yuml: "\u00FF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  "int": "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};

const replaceXHTMLEntities = function(str) {
  return str.replace(/&.*?;/g, function(entity) {
    var ref;
    return (ref = XHTMLEntities[entity.slice(1, +(entity.length - 2) + 1 || 9e9)]) != null ? ref : entity;
  });
};

const REAL_ITERATOR_SYMBOL = typeof(Symbol) === 'function' && Symbol.iterator;
const FAUX_ITERATOR_SYMBOL = '@@iterator';
const ITERATOR_SYMBOL      = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;

const isIterable = function(obj) {
  return typeof (obj != null ? obj[ITERATOR_SYMBOL] : void 0) === 'function';
};

/** Visitor factory for babel, converting rtag to JSX
  *
  * rtag('literal')
  * rtag('literal.classA.classB')
  * rtag('literal', 
  */
export default function({types: t}) {
  /** Get a JSXElement from a CallExpression
   * Returns null if this impossible */
  function convertRtagToJSX(node) {
    if (!isRtagNode(node)) return null;

    // nameNode: usually either a stringLiteral or an identifer ('div', MyComponent)
    const [nameNode, propsNode, ...contentNodes] = node.arguments;

    // Beginning portion copied directly from rtag
    const classes = [];
    let id;
    let name;

    // Will either be a JSXIdentifier if name is a string literal, or a JSXMemberExpression if it is a react element.
    let jsxName;

    if (t.isStringLiteral(nameNode)) {
      name = nameNode.value;
      const parts = ((name != undefined) ? name : 'div').split(/(?=[.#])/);
      let tagName = "div";

      for (var p of parts) {
        if (p.length) {
          switch (p[0]) {
          case '#':
            if (p.length > 1) {
              id = p.substr(1);
            }
            break;
          case '.':
            if (p.length > 1) {
              classes.push(p.substr(1));
            }
            break;
          default:
            tagName = p;
          }
        }
      }

      jsxName = t.jSXIdentifier(tagName);
    } else {
      jsxName = getJSXName(nameNode);
    }

    let jsxAttrs = [];

    // Check if 2nd arg is a props object literal or an identifier that has the word props in it.
    if ((propsNode != undefined) && 
        (t.isObjectExpression(propsNode) || 
         (t.isIdentifier(propsNode) && propsNode.name.match(/prop/i)) ||
         (t.isCallExpression(propsNode) && t.isIdentifier(propsNode.callee) && propsNode.callee.name.match(/prop/i)) ||
         (t.isCallExpression(propsNode) && t.isMemberExpression(propsNode.callee) && getMemberExpressionFullName(propsNode.callee).match(/_.extend/i))
        )) {

      // figure how to get props from identifier.
      jsxAttrs = getJSXAttrs(propsNode);
    } else {
      if (propsNode != undefined) {
        // propsNode is actually another content, so shift over.
        contentNodes.unshift(propsNode);
      }
    }

    // add class attributes (note that there might be a className within the props)
    if (classes.length > 0) {
      const className = classes.join(' ');

      const classNameJSX = t.jSXAttribute(
        t.jSXIdentifier("className"),
        t.stringLiteral(className)
      );

      jsxAttrs.unshift(classNameJSX);
    }

    // add id attribute
    if (id != undefined) {
      const idJSX = t.jSXAttribute(
        t.jSXIdentifier("id"),
        t.stringLiteral(id)
      );

      jsxAttrs.unshift(idJSX);
    }

    // change string literals and numeric literals.
    const modifiedContentNodes = contentNodes.map((cnode) => {
      if (t.isStringLiteral(cnode)) {
        const value = replaceXHTMLEntities(cnode.value);
        return t.stringLiteral(value);
      } else if (t.isNumericLiteral(cnode)) {
        const value = cnode.value.toString();
        return t.stringLiteral(value);
      } else {
        return cnode;
      }
    });

    const children = getJSXChildren(modifiedContentNodes);

    // self-closing tag if no children
    const selfClosing = children.length === 0;
    const startTag    = t.jSXOpeningElement(jsxName, jsxAttrs, selfClosing);
    const endTag      = selfClosing ? null : t.jSXClosingElement(jsxName);

    return t.jSXElement(startTag, endTag, children, selfClosing);
  }

  /** Get a JSXIdentifier or JSXMemberExpression from a Node of known type.
   * Returns null if a unknown node type, null or undefined is passed. */
  function getJSXName(node) {
    if (node == null) return null;

    const name = getJSXIdentifier(node);
    if (name !== null) return name;

    if (!t.isMemberExpression(node)) return null;
    const object   = getJSXName(node.object);
    const property = getJSXName(node.property);

    if (object === null || property === null) return null;
    return t.jSXMemberExpression(object, property);
  }

  function getMemberExpressionFullName(node) {
    if (!t.isMemberExpression(node)) return null;

    if (t.isMemberExpression(node.object)) {
      return getMemberExpressionFullName(node.object) + "." + node.property.name;
    } else {
      return node.object.name + "." + node.property.name;
    }
  }

  /** Get a array of JSX(Spread)Attribute from a props ObjectExpression.
   * Handles the _.extend from underscore.
   * Returns null if a validation error occurs. */
  function getJSXAttrs(node) {
    if (node == null || isNullLikeNode(node)) return [];

    if (t.isCallExpression(node) && t.isMemberExpression(node.callee, { name: '_' }) && node.callee.property.name == "extend") {
      const props = node.arguments.map(getJSXAttrs);
      //if calling this recursively works, flatten.
      if (props.every(prop => prop !== null))
        return [].concat.apply([], props);
    }

    if (!t.isObjectExpression(node) && t.isExpression(node))
      return [t.jSXSpreadAttribute(node)];

    if (!isPlainObjectExpression(node)) return null;
    return node.properties.map(prop => t.isObjectProperty(prop)
                               ? t.jSXAttribute(getJSXIdentifier(prop.key), getJSXAttributeValue(prop.value))
                               : t.jSXSpreadAttribute(prop.argument));
  }

  function getJSXChildren(nodes) {
    const children = nodes.filter(node => !isNullLikeNode(node)).map(getJSXChild);
    if (children.some(child => child == null)) return null;
    return children;
  }

  function getJSXChild(node) {
    if (t.isStringLiteral(node)) return t.jSXText(node.value);
    if (t.isConditionalExpression(node)) return convertTernaryToJSXControl(node);
    if (isRtagNode(node)) return convertRtagToJSX(node);
    if (t.isExpression(node)) return t.jSXExpressionContainer(node);
    return null;
  }

  function convertTernaryToJSXControl(node) {
    if (!t.isConditionalExpression(node)) return null;

    if (isNullLikeNode(node.alternate)) {
      /*
       * Simple ternary can convert to simple If jsx expresion
       *
       *  CONDITION ? rtag('h1') : null
       *
       *  <If condition={CONDITION}>
       *    rtag('h1')
       *  </If>
       */
      const jsxId = t.jSXIdentifier("If");

      const attrs = [
        t.jSXAttribute(t.jSXIdentifier("condition"), getJSXAttributeValue(node.test))
      ];

      const children = [
        getJSXChild(node.consequent)
      ];

      const selfClosing = false;
      const startTag    = t.jSXOpeningElement(jsxId, attrs, selfClosing);
      const endTag      = t.jSXClosingElement(jsxId);

      return t.jSXElement(startTag, endTag, children, selfClosing);
    } else {
      /*
       * Advanced ternary can convert to Choose jsx expression.
       * Handles deep ternaries.
       *
       *  CONDITION1 ? rtag('h1') : CONDITION2 ? rtag('h2') : rtag('h3')
       *
       *  <Choose>
         *  <When condition={CONDITION1}>
         *    rtag('h1')
         *  </When>
         *  <When condition={CONDITION2}>
         *    rtag('h2')
         *  </When>
         *  <Otherwise>
         *    rtag('h2')
         *  </Otherwise>
       *  </Choose>
       */

      let whenChildren = [];
      let currentTernary = node;

      while (t.isConditionalExpression(currentTernary)) {
        const attrs = [
          t.jSXAttribute(t.jSXIdentifier("condition"), getJSXAttributeValue(currentTernary.test))
        ];

        const children = [
          getJSXChild(currentTernary.consequent)
        ];

        const whenJSX = t.jSXElement(
          t.jSXOpeningElement(t.jSXIdentifier("When"), attrs, false),
          t.jSXClosingElement(t.jSXIdentifier("When")),
          children,
          false
        );

        whenChildren.push(whenJSX);

        // update to alternate which may or may not be a ternary.
        currentTernary = currentTernary.alternate;
      }

      // push otherwise child which should be the currentTernary.
      whenChildren.push(
        t.jSXElement(
          t.jSXOpeningElement(t.jSXIdentifier("Otherwise"), [], false),
          t.jSXClosingElement(t.jSXIdentifier("Otherwise")),
          [getJSXChild(currentTernary)],
          false
        )
      );

      // choose element
      return t.jSXElement(
        t.jSXOpeningElement(t.jSXIdentifier("Choose"), [], false),
        t.jSXClosingElement(t.jSXIdentifier("Choose")),
        whenChildren,
        false
      );
    }
  }


  function getJSXIdentifier(node) {
    //TODO: JSXNamespacedName
    if (t.isIdentifier(node)) return t.jSXIdentifier(node.name);
    if (t.isStringLiteral(node)) return t.jSXIdentifier(node.value);
    return null;
  }

  function getJSXAttributeValue(node) {
    if (t.isStringLiteral(node)) return node;
    if (t.isJSXElement(node)) return node;
    if (t.isExpression(node)) return t.jSXExpressionContainer(node);
    return null;
  }

  /** tests if a node is a CallExpression with callee “React.createElement” */
  const isRtagNode = node =>
    t.isCallExpression(node) &&
      t.isIdentifier(node.callee,   { name: 'rtag' }) &&
      !node.callee.computed;

  /** Tests if a node is “null” or “undefined” */
  const isNullLikeNode = node =>
    t.isNullLiteral(node) ||
      t.isIdentifier(node, { name: 'undefined' });

  /** Tests if a node is an object expression with noncomputed, nonmethod attrs */
  const isPlainObjectExpression = node =>
    t.isObjectExpression(node) &&
      node.properties.every(m =>
                            t.isSpreadProperty(m) ||
                            (t.isObjectProperty(m, {computed: false}) &&
                             getJSXIdentifier(m.key) !== null &&
                             getJSXAttributeValue(m.value) !== null));

  return {
    visitor: {
      CallExpression(path) {
        const node = convertRtagToJSX(path.node);
        if (node === null) return null;
        path.replaceWith(node)
      }
    }
  }
}
