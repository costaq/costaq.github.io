import{p as o,A as r,a0 as c,v as l,C as e,O as y,x as F,B as i,b as D,t as d,F as a,L as p,R as C}from"./chunks/framework.79e7abf5.js";import{C as u}from"./chunks/Container.93d14c12.js";const g={__name:"WaterLevelPond",props:{value:{type:Number,default:56}},setup(n){const s=o(null);return r(()=>{c(()=>import("./chunks/index.11fb3b81.js"),["assets/chunks/index.11fb3b81.js","assets/chunks/framework.79e7abf5.js"]).then(t=>{s.value=t.EWaterLevelPond})}),(t,b)=>(l(),e(u,null,{default:y(()=>[s.value?(l(),e(F(s.value),{key:0,style:{height:"200px",width:"200px"},value:n.value},null,8,["value"])):i("",!0)]),_:1}))}},A=a("h1",{id:"水位图",tabindex:"-1"},[p("水位图 "),a("a",{class:"header-anchor",href:"#水位图","aria-label":'Permalink to "水位图"'},"​")],-1),v=a("h2",{id:"基本示例",tabindex:"-1"},[p("基本示例 "),a("a",{class:"header-anchor",href:"#基本示例","aria-label":'Permalink to "基本示例"'},"​")],-1),h=C(`<details class="details custom-block"><summary>点击查看代码</summary><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-CdcT4" id="tab-sSCjDyg" checked="checked"><label for="tab-sSCjDyg">vue2</label><input type="radio" name="group-CdcT4" id="tab-t4Z9-H3"><label for="tab-t4Z9-H3">vue3</label><input type="radio" name="group-CdcT4" id="tab-1CSvlAk"><label for="tab-1CSvlAk">react</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">e-water-level-pond</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width:200px;height:200px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :value=&quot;56&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">e-water-level-pond</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width:200px;height:200px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :value=&quot;56&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> EWaterLevelPond </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;e-datav-vue3&#39;;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">WaterLevelPond</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">e-datav-react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Page</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">WaterLevelPond</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#F78C6C;">56</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> Page</span></span></code></pre></div></div></div></details><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">value</td><td style="text-align:center;">Number</td><td style="text-align:center;">数值，必填</td></tr><tr><td style="text-align:center;">decimals</td><td style="text-align:center;">Number</td><td style="text-align:center;">小数点，默认0</td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:center;">Number</td><td style="text-align:center;">数字变动时动画持续时间，默认3000毫秒</td></tr><tr><td style="text-align:center;">fontSize</td><td style="text-align:center;">Number</td><td style="text-align:center;">字体大小，默认36</td></tr><tr><td style="text-align:center;">fontColor</td><td style="text-align:center;">String</td><td style="text-align:center;">颜色，默认#000</td></tr><tr><td style="text-align:center;">backgroundColor</td><td style="text-align:center;">String</td><td style="text-align:center;">背景色颜色，默认transparent透明</td></tr><tr><td style="text-align:center;">waveColors</td><td style="text-align:center;">String[]</td><td style="text-align:center;">水波颜色，默认[&#39;#41a9e3&#39;, &#39;#b0e0ff&#39;]，第一个参数为前波浪，后一个参数为后波浪</td></tr></tbody></table>`,3),f=JSON.parse('{"title":"水位图","description":"","frontmatter":{},"headers":[],"relativePath":"waterLevelPond.md","filePath":"waterLevelPond.md"}'),m={name:"waterLevelPond.md"},P=Object.assign(m,{setup(n){return(s,t)=>(l(),D("div",null,[A,v,d(g),h]))}});export{f as __pageData,P as default};
