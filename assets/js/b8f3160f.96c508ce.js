"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[711],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6611:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const l={},o="Mapping to Downstream Clusters",i={unversionedId:"gitrepo-targets",id:"gitrepo-targets",title:"Mapping to Downstream Clusters",description:'!!! hint "Multi-cluster Only"',source:"@site/docs/gitrepo-targets.md",sourceDirName:".",slug:"/gitrepo-targets",permalink:"/gitrepo-targets",draft:!1,editUrl:"https://github.com/fleet-docs/docs/edit/main/docs/gitrepo-targets.md",tags:[],version:"current",lastUpdatedAt:1664806581,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Expected Repo Structure",permalink:"/gitrepo-structure"},next:{title:"bundle-diffs",permalink:"/bundle-diffs"}},s={},u=[{value:"Defining targets",id:"defining-targets",level:2},{value:"Target Matching",id:"target-matching",level:2},{value:"Default target",id:"default-target",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mapping-to-downstream-clusters"},"Mapping to Downstream Clusters"),(0,a.kt)("p",null,'!!! hint "Multi-cluster Only"\nThis approach only applies if you are running Fleet in a multi-cluster style'),(0,a.kt)("p",null,"When deploying ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepos")," to downstream clusters the clusters must be mapped to a target."),(0,a.kt)("h2",{id:"defining-targets"},"Defining targets"),(0,a.kt)("p",null,"The deployment targets of ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepo")," is done using the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.targets")," field to\nmatch clusters or cluster groups. The YAML specification is as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: GitRepo\napiVersion: {{fleet.apiVersion}}\nmetadata:\n  name: myrepo\n  namespace: clusters\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - simple\n\n  # Targets are evaluated in order and the first one to match is used. If\n  # no targets match then the evaluated cluster will not be deployed to.\n  targets:\n  # The name of target. This value is largely for display and logging.\n  # If not specified a default name of the format "target000" will be used\n  - name: prod\n    # A selector used to match clusters.  The structure is the standard\n    # metav1.LabelSelector format. If clusterGroupSelector or clusterGroup is specified,\n    # clusterSelector will be used only to further refine the selection after\n    # clusterGroupSelector and clusterGroup is evaluated.\n    clusterSelector:\n      matchLabels:\n        env: prod\n    # A selector used to match cluster groups.\n    clusterGroupSelector:\n      matchLabels:\n        region: us-east\n    # A specific clusterGroup by name that will be selected\n    clusterGroup: group1\n')),(0,a.kt)("h2",{id:"target-matching"},"Target Matching"),(0,a.kt)("p",null,"All clusters and cluster groups in the same namespace as the ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepo")," will be evaluated against all targets.\nIf any of the targets match the cluster then the ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepo")," will be deployed to the downstream cluster. If\nno match is made, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepo")," will not be deployed to that cluster."),(0,a.kt)("p",null,'There are three approaches to matching clusters.\nOne can use cluster selectors, cluster group selectors, or an explicit cluster group name.  All criteria is additive so\nthe final match is evaluated as "clusterSelector && clusterGroupSelector && clusterGroup".  If any of the three have the\ndefault value it is dropped from the criteria.  The default value is either null or "".  It is important to realize\nthat the value ',(0,a.kt)("inlineCode",{parentName:"p"},"{}"),' for a selector means "match everything."'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Match everything\nclusterSelector: {}\n# Selector ignored\nclusterSelector: null\n")),(0,a.kt)("h2",{id:"default-target"},"Default target"),(0,a.kt)("p",null,"If no target is set for the ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepo")," then the default targets value is applied.  The default targets value is as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"targets:\n- name: default\n  clusterGroup: default\n")),(0,a.kt)("p",null,"This means if you wish to setup a default location non-configured GitRepos will go to, then just create a cluster group called default\nand add clusters to it."))}p.isMDXComponent=!0}}]);