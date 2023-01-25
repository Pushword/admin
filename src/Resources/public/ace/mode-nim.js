ace.define("ace/mode/nim_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,i=function(){var e=this.createKeywordMapper({variable:"var|let|const",keyword:"assert|parallel|spawn|export|include|from|template|mixin|bind|import|concept|raise|defer|try|finally|except|converter|proc|func|macro|method|and|or|not|xor|shl|shr|div|mod|in|notin|is|isnot|of|static|if|elif|else|case|of|discard|when|return|yield|block|break|while|echo|continue|asm|using|cast|addr|unsafeAddr|type|ref|ptr|do|declared|defined|definedInScope|compiles|sizeOf|is|shallowCopy|getAst|astToStr|spawn|procCall|for|iterator|as","storage.type":"newSeq|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|float|char|bool|string|set|pointer|float32|float64|enum|object|cstring|array|seq|openArray|varargs|UncheckedArray|tuple|set|distinct|void|auto|openarray|range","support.function":"lock|ze|toU8|toU16|toU32|ord|low|len|high|add|pop|contains|card|incl|excl|dealloc|inc","constant.language":"nil|true|false"},"identifier"),t="(?:0[xX][\\dA-Fa-f][\\dA-Fa-f_]*)",n="(?:[0-9][\\d_]*)",o="(?:0o[0-7][0-7_]*)",r="(?:0[bB][01][01_]*)",i="(?:"+t+"|"+n+"|"+o+"|"+r+")(?:'?[iIuU](?:8|16|32|64)|u)?\\b",a="(?:[eE][+-]?[\\d][\\d_]*)",s="(?:[\\d][\\d_]*(?:[.][\\d](?:[\\d_]*)"+a+"?)|"+a+")",l="(?:"+t+"(?:'(?:(?:[fF](?:32|64)?)|[dD])))|(?:"+s+"|"+n+"|"+o+"|"+r+")(?:'(?:(?:[fF](?:32|64)?)|[dD]))",g="[a-zA-Z][a-zA-Z0-9_]*";this.$rules={start:[{token:["identifier","keyword.operator","support.function"],regex:"("+g+")([.]{1})("+g+")(?=\\()"},{token:"paren.lparen",regex:"(\\{\\.)",next:[{token:"paren.rparen",regex:"(\\.\\}|\\})",next:"start"},{include:"methods"},{token:"identifier",regex:g},{token:"punctuation",regex:/[,]/},{token:"keyword.operator",regex:/[=:.]/},{token:"paren.lparen",regex:/[[(]/},{token:"paren.rparen",regex:/[\])]/},{include:"math"},{include:"strings"},{defaultToken:"text"}]},{token:"comment.doc.start",regex:/##\[(?!])/,push:"docBlockComment"},{token:"comment.start",regex:/#\[(?!])/,push:"blockComment"},{token:"comment.doc",regex:"##.*$"},{token:"comment",regex:"#.*$"},{include:"strings"},{token:"string",regex:"'(?:\\\\(?:[abercnlftv]|x[0-9A-Fa-f]{2}|[0-2][0-9]{2}|u[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})|.{1})?'"},{include:"methods"},{token:e,regex:"[a-zA-Z][a-zA-Z0-9_]*\\b"},{token:["keyword.operator","text","storage.type"],regex:"([:])(\\s+)("+g+")(?=$|\\)|\\[|,|\\s+=|;|\\s+\\{)"},{token:"paren.lparen",regex:/\[\.|{\||\(\.|\[:|[[({`]/},{token:"paren.rparen",regex:/\.\)|\|}|\.]|[\])}]/},{token:"keyword.operator",regex:/[=+\-*\/<>@$~&%|!?^.:\\]/},{token:"punctuation",regex:/[,;]/},{include:"math"}],blockComment:[{regex:/#\[]/,token:"comment"},{regex:/#\[(?!])/,token:"comment.start",push:"blockComment"},{regex:/]#/,token:"comment.end",next:"pop"},{defaultToken:"comment"}],docBlockComment:[{regex:/##\[]/,token:"comment.doc"},{regex:/##\[(?!])/,token:"comment.doc.start",push:"docBlockComment"},{regex:/]##/,token:"comment.doc.end",next:"pop"},{defaultToken:"comment.doc"}],math:[{token:"constant.float",regex:l},{token:"constant.float",regex:s},{token:"constant.integer",regex:i}],methods:[{token:"support.function",regex:"(\\w+)(?=\\()"}],strings:[{token:"string",regex:"(\\b"+g+')?"""',push:[{token:"string",regex:'"""',next:"pop"},{defaultToken:"string"}]},{token:"string",regex:"\\b"+g+'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{defaultToken:"string"}]},{token:"string",regex:'"',push:[{token:"string",regex:'"|$',next:"pop"},{token:"constant.language.escape",regex:"\\\\([abeprcnlftv\\\"']|x[0-9A-Fa-f]{2}|[0-2][0-9]{2}|u[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})"},{defaultToken:"string"}]}]},this.normalizeRules()};o.inherits(i,r),t.NimHighlightRules=i})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../../range").Range,i=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(a,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(o)?"start":r},this.getFoldWidgetRange=function(e,t,n,o){var r,i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);if(r=i.match(this.foldingStartMarker)){var a=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,a);var s=e.getCommentFoldRange(n,a+r[0].length,1);return s&&!s.isMultiLine()&&(o?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t&&(r=i.match(this.foldingStopMarker))){a=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,a):e.getCommentFoldRange(n,a,-1)}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),i=t,a=n.length,s=t+=1,l=e.getLength();++t<l;){var g=(n=e.getLine(t)).search(/\S/);if(-1!==g){if(o>g)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=i)break;if(c.isMultiLine())t=c.end.row;else if(o==g)break}s=t}}return new r(i,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),i=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++n<i;){t=e.getLine(n);var g=s.exec(t);if(g&&(g[1]?l--:l++,!l))break}if(n>a)return new r(a,o,n,t.length)}}.call(a.prototype)})),ace.define("ace/mode/nim",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/nim_highlight_rules","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,i=e("./nim_highlight_rules").NimHighlightRules,a=e("./folding/cstyle").FoldMode,s=function(){r.call(this),this.HighlightRules=i,this.foldingRules=new a,this.$behaviour=this.$defaultBehaviour};o.inherits(s,r),function(){this.lineCommentStart="#",this.blockComment={start:"#[",end:"]#",nestable:!0},this.$id="ace/mode/nim"}.call(s.prototype),t.Mode=s})),ace.require(["ace/mode/nim"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));