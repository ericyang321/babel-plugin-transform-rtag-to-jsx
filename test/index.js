import chai, {expect} from 'chai';
import convertTo from './chai-convert-to';

chai.use(convertTo(
	{ plugins: ['./lib/plugins/rtag_to_jsx.js', 'syntax-object-rest-spread'] },
	{ plugins: ['syntax-jsx', 'syntax-object-rest-spread'] })
);

describe('createElement-to-JSX', () => {
  it('should convert 1-argument calls', () => {
    expect('rtag("h1")'       ).to.convertTo('<h1 />;');
    expect('rtag(Foo)'        ).to.convertTo('<Foo />;');
    expect('rtag(Foo.Bar)'    ).to.convertTo('<Foo.Bar />;');
    expect('rtag(Foo.Bar.Baz)').to.convertTo('<Foo.Bar.Baz />;');
  });

  it('should convert string literals', () => {
    expect('rtag("h1", {}, "WORD")' ).to.convertTo('<h1>WORD</h1>;');
    expect('rtag("h1", "WORD")' ).to.convertTo('<h1>WORD</h1>;');
  });

  // Would prefer to have non escaped unicode chars even though it isn't safe
  // https://github.com/babel/babel/pull/5592
  // We double escape the \u so that we can compare the generated \u literal.
  it('should convert string literals with escapes', () => {
    expect('rtag("h1", {}, "&spades;WORD&spades;")' ).to.convertTo('<h1>{"\\u2660WORD\\u2660"}</h1>;');
    expect('rtag("h1", "&spades;WORD&spades;")' ).to.convertTo('<h1>{"\\u2660WORD\\u2660"}</h1>;');
  });

  it('should convert numeric literals to strings', () => {
    expect('rtag("h1", {}, 42)' ).to.convertTo('<h1>42</h1>;');
    expect('rtag("h1", 42)'     ).to.convertTo('<h1>42</h1>;');
  });

  it('should convert id', () => {
    expect('rtag("h1#bar")'     ).to.convertTo('<h1 id="bar" />;');
    expect('rtag("h1#bar#baz")' ).to.convertTo('<h1 id="baz" />;');
  });

  it('should convert classname', () => {
    expect('rtag(".bar")'           ).to.convertTo('<div className="bar" />;');
    expect('rtag("h1.bar")'         ).to.convertTo('<h1 className="bar" />;');
    expect('rtag("h1.bar.baz")'     ).to.convertTo('<h1 className="bar baz" />;');
    expect('rtag("h1.bar.baz#foo")' ).to.convertTo('<h1 id="foo" className="bar baz" />;');
  });
	
  it('should convert effective 1-argument calls (with null or undefined)', () => {
    expect('rtag("h1", null)'      ).to.convertTo('<h1 />;');
    expect('rtag("h2", null, null)').to.convertTo('<h2 />;');
    expect('rtag("h3", undefined)' ).to.convertTo('<h3 />;');
  });
	
  it('should handle props without children', () => {
    expect('rtag("h1", {hi: there})'  ).to.convertTo('<h1 hi={there} />;');
    expect('rtag("h2", {"hi": there})').to.convertTo('<h2 hi={there} />;');
    expect('rtag("h3", {hi: "there"})').to.convertTo('<h3 hi="there" />;');
  });
	
  it('should handle spread props', () => {
    expect('rtag("h1", props)'     ).to.convertTo('<h1 {...props} />;');
    expect('rtag("h1", getProps())').to.convertTo('<h1 {...getProps()} />;');
  });
	
  it('should handle mixed props', () => {
    expect('rtag("h1", _.extend({ hi: "there" }, props))'    ).to.convertTo('<h1 {..._.extend({ hi: "there" }, props)} />;');
    expect('rtag("h1", _.extend({}, props, { hi: "there" }))').to.convertTo('<h1 {..._.extend({}, props, { hi: "there" })} />;');
    expect('rtag("h1", { ...props, hi: "there" })'           ).to.convertTo('<h1 {...props} hi="there" />;');
  });
	
  it('should handle props and ignore “null”/“undefined” children', () => {
    expect('rtag("h1", {hi: there}, null, undefined)').to.convertTo('<h1 hi={there} />;');
  });
	
  it('should ignore “null”/“undefined” props and handle children', () => {
    expect('rtag("h1", null, "Header")'                          ).to.convertTo('<h1>Header</h1>;');
    //this can be created from e.g. '<h2>Header{"harhar"}</h2>', but i think there’s no downside to merging it
    expect('rtag("h2", null, "Header", "harhar")'                ).to.convertTo('<h2>Headerharhar</h2>;');
    expect('rtag("h3", null, rtag("i"))'          ).to.convertTo('<h3><i /></h3>;');
    expect('rtag("h4", null, "a", rtag("b"), "c")').to.convertTo('<h4>a<b />c</h4>;');
    expect('rtag("h4", null, rtag("h5", {"active": true}))').to.convertTo('<h4><h5 active={true} /></h4>;');
    expect('rtag("h4", null, rtag("h5", props))').to.convertTo('<h4><h5 {...props} /></h4>;');
    //expect('rtag("h4", rtag(foo), rtag(bar), rtag(baz))').to.convertTo('<h4><h5 active={...props} /></h4>;');
  });
	
  it('should handle props and children', () => {
    //we extensively tested props and children separately, so only sth. basic
    expect('rtag("h1", {hi: there}, "Header")').to.convertTo('<h1 hi={there}>Header</h1>;');
  });
  
  it('should ignore intermingled “null”/“undefined” children', () => {
    expect('rtag("h1", null, null, "Header", undefined)').to.convertTo('<h1>Header</h1>;');
  });
  
  it('should handle children in nested expressions', () => {
    expect('rtag("h1", null, foo ? rtag("p") : null)').to.convertTo('<h1><If condition={foo}><p /></If></h1>;');
    expect('rtag("h1", null, foo ? (bar ? rtag("p") : null) : null)').to.convertTo('<h1><If condition={foo}><If condition={bar}><p /></If></If></h1>;');
    expect('rtag("h1", null, foo ? rtag("h2") : bar ? rtag("h3") : rtag("h4"))').to.convertTo('<h1><Choose><When condition={foo}><h2 /></When><When condition={bar}><h3 /></When><Otherwise><h4 /></Otherwise></Choose></h1>;');
  });
})
