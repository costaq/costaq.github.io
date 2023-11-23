import{p as c,d as o,A as i,a0 as u,a1 as d,v as t,C as p,O as F,x as h,B as D,b as y,t as v,R as r}from"./chunks/framework.db0db395.js";import{C as m}from"./chunks/Container.314fddb9.js";const C={__name:"GaugeChart",props:{value:{type:Number,default:0},valueFontSize:{type:Number,default:30}},setup(l){const a=c(null),s=o(66),e=o(null);return i(()=>{u(()=>import("./chunks/index.5287e24a.js"),["assets/chunks/index.5287e24a.js","assets/chunks/framework.db0db395.js"]).then(n=>{a.value=n.EGaugeChart}),e.value=setInterval(()=>{s.value=Math.round(Math.random()*99)},5e3)}),d(()=>{e.value=null}),(n,A)=>(t(),p(m,null,{default:F(()=>[a.value?(t(),p(h(a.value),{key:0,style:{height:"300px",widht:"300px"},value:s.value,valueFontSize:l.valueFontSize},null,8,["value","valueFontSize"])):D("",!0)]),_:1}))}},g=r('<h1 id="仪表盘" tabindex="-1">仪表盘 <a class="header-anchor" href="#仪表盘" aria-label="Permalink to &quot;仪表盘&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>目前仅支持vue3版本，vue2及react版本后续会增加</p></div><h2 id="基本示例" tabindex="-1">基本示例 <a class="header-anchor" href="#基本示例" aria-label="Permalink to &quot;基本示例&quot;">​</a></h2>',3),_=r(`<details class="details custom-block"><summary>点击查看代码</summary><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Ig8id" id="tab-OZUmCjh" checked="checked"><label for="tab-OZUmCjh">vue3</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:300px;width: 300px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">e-gauge-chart</span><span style="color:#89DDFF;"> :value=&quot;value&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> EGaugeChart </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;e-datav-vue3&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const value = ref(66);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div></details><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>字段</th><th>类型</th><th><div style="width:430px;">备注</div></th></tr></thead><tbody><tr><td>value</td><td>Number</td><td>百分比值，仅限0-100之间值</td></tr><tr><td>valueFontSize</td><td>Number</td><td>数值字体大小，默认30</td></tr></tbody></table>`,3),k=JSON.parse('{"title":"仪表盘","description":"","frontmatter":{},"headers":[],"relativePath":"gaugeChart.md","filePath":"gaugeChart.md"}'),b={name:"gaugeChart.md"},q=Object.assign(b,{setup(l){return(a,s)=>(t(),y("div",null,[g,v(C,{value:66}),_]))}});export{k as __pageData,q as default};
