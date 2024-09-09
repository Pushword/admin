ace.define("ace/mode/ruby_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var r=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules,s=t.constantOtherSymbol={token:"constant.other.symbol.ruby",regex:"[:](?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?"};t.qString={token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},t.qqString={token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},t.tString={token:"string",regex:"[`](?:(?:\\\\.)|(?:[^'\\\\]))*?[`]"};var i=t.constantNumericHex={token:"constant.numeric",regex:"0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_(?=[0-9a-fA-F]))*\\b"},o=t.constantNumericBinary={token:"constant.numeric",regex:/\b(0[bB][01](?:[01]|_(?=[01]))*)\b/},l=t.constantNumericDecimal={token:"constant.numeric",regex:/\b(0[dD](?:[1-9](?:[\d]|_(?=[\d]))*|0))\b/},c=t.constantNumericOctal={token:"constant.numeric",regex:/\b(0[oO]?(?:[1-7](?:[0-7]|_(?=[0-7]))*|0))\b/},u=t.constantNumericRational={token:"constant.numeric",regex:/\b([\d]+(?:[./][\d]+)?ri?)\b/},g=t.constantNumericComplex={token:"constant.numeric",regex:/\b([\d]i)\b/},h=t.constantNumericFloat={token:"constant.numeric",regex:"[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?i?\\b"},d=t.instanceVariable={token:"variable.instance",regex:"@{1,2}[a-zA-Z_\\d]+"},_=function(){var e=this.$keywords=this.createKeywordMapper({keyword:"alias|and|BEGIN|begin|break|case|class|def|defined|do|else|elsif|END|end|ensure|__FILE__|finally|for|gem|if|in|__LINE__|module|next|not|or|private|protected|public|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield|__ENCODING__|prepend","constant.language":"true|TRUE|false|FALSE|nil|NIL|ARGF|ARGV|DATA|ENV|RUBY_PLATFORM|RUBY_RELEASE_DATE|RUBY_VERSION|STDERR|STDIN|STDOUT|TOPLEVEL_BINDING|RUBY_PATCHLEVEL|RUBY_REVISION|RUBY_COPYRIGHT|RUBY_ENGINE|RUBY_ENGINE_VERSION|RUBY_DESCRIPTION","variable.language":"$DEBUG|$defout|$FILENAME|$LOAD_PATH|$SAFE|$stdin|$stdout|$stderr|$VERBOSE|$!|root_url|flash|session|cookies|params|request|response|logger|self","support.function":"abort|Array|assert|assert_equal|assert_not_equal|assert_same|assert_not_same|assert_nil|assert_not_nil|assert_match|assert_no_match|assert_in_delta|assert_throws|assert_raise|assert_nothing_raised|assert_instance_of|assert_kind_of|assert_respond_to|assert_operator|assert_send|assert_difference|assert_no_difference|assert_recognizes|assert_generates|assert_response|assert_redirected_to|assert_template|assert_select|assert_select_email|assert_select_rjs|assert_select_encoded|css_select|at_exit|attr|attr_writer|attr_reader|attr_accessor|attr_accessible|autoload|binding|block_given?|callcc|caller|catch|chomp|chomp!|chop|chop!|defined?|delete_via_redirect|eval|exec|exit|exit!|fail|Float|flunk|follow_redirect!|fork|form_for|form_tag|format|gets|global_variables|gsub|gsub!|get_via_redirect|host!|https?|https!|include|Integer|lambda|link_to|link_to_unless_current|link_to_function|link_to_remote|load|local_variables|loop|open|open_session|p|print|printf|proc|putc|puts|post_via_redirect|put_via_redirect|raise|rand|raw|readline|readlines|redirect?|request_via_redirect|require|scan|select|set_trace_func|sleep|split|sprintf|srand|String|stylesheet_link_tag|syscall|system|sub|sub!|test|throw|trace_var|trap|untrace_var|atan2|cos|exp|frexp|ldexp|log|log10|sin|sqrt|tan|render|javascript_include_tag|csrf_meta_tag|label_tag|text_field_tag|submit_tag|check_box_tag|content_tag|radio_button_tag|text_area_tag|password_field_tag|hidden_field_tag|fields_for|select_tag|options_for_select|options_from_collection_for_select|collection_select|time_zone_select|select_date|select_time|select_datetime|date_select|time_select|datetime_select|select_year|select_month|select_day|select_hour|select_minute|select_second|file_field_tag|file_field|respond_to|skip_before_filter|around_filter|after_filter|verify|protect_from_forgery|rescue_from|helper_method|redirect_to|before_filter|send_data|send_file|validates_presence_of|validates_uniqueness_of|validates_length_of|validates_format_of|validates_acceptance_of|validates_associated|validates_exclusion_of|validates_inclusion_of|validates_numericality_of|validates_with|validates_each|authenticate_or_request_with_http_basic|authenticate_or_request_with_http_digest|filter_parameter_logging|match|get|post|resources|redirect|scope|assert_routing|translate|localize|extract_locale_from_tld|caches_page|expire_page|caches_action|expire_action|cache|expire_fragment|expire_cache_for|observe|cache_sweeper|has_many|has_one|belongs_to|has_and_belongs_to_many|p|warn|refine|using|module_function|extend|alias_method|private_class_method|remove_method|undef_method","invalid.deprecated":"debugger"},"identifier"),t="\\\\(?:n(?:[1-7][0-7]{0,2}|0)|[nsrtvfbae'\"\\\\]|c(?:\\\\M-)?.|M-(?:\\\\C-|\\\\c)?.|C-(?:\\\\M-)?.|[0-7]{3}|x[\\da-fA-F]{2}|u[\\da-fA-F]{4}|u{[\\da-fA-F]{1,6}(?:\\s[\\da-fA-F]{1,6})*})",n={"(":")","[":"]","{":"}","<":">","^":"^","|":"|","%":"%"};this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"comment.multiline",regex:"^=begin(?=$|\\s.*$)",next:"comment"},{token:"string.regexp",regex:/[/](?=.*\/)/,next:"regex"},[{token:["constant.other.symbol.ruby","string.start"],regex:/(:)?(")/,push:[{token:"constant.language.escape",regex:t},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/"/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/`/,push:[{token:"constant.language.escape",regex:t},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/`/,next:"pop"},{defaultToken:"string"}]},{token:["constant.other.symbol.ruby","string.start"],regex:/(:)?(')/,push:[{token:"constant.language.escape",regex:/\\['\\]/},{token:"string.end",regex:/'/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/%[qwx]([(\[<{^|%])/,onMatch:function(e,t,n){n.length&&(n=[]);var r=e[e.length-1];return n.unshift(r,t),this.next="qStateWithoutInterpolation",this.token}},{token:"string.start",regex:/%[QWX]?([(\[<{^|%])/,onMatch:function(e,t,n){n.length&&(n=[]);var r=e[e.length-1];return n.unshift(r,t),this.next="qStateWithInterpolation",this.token}},{token:"constant.other.symbol.ruby",regex:/%[si]([(\[<{^|%])/,onMatch:function(e,t,n){n.length&&(n=[]);var r=e[e.length-1];return n.unshift(r,t),this.next="sStateWithoutInterpolation",this.token}},{token:"constant.other.symbol.ruby",regex:/%[SI]([(\[<{^|%])/,onMatch:function(e,t,n){n.length&&(n=[]);var r=e[e.length-1];return n.unshift(r,t),this.next="sStateWithInterpolation",this.token}},{token:"string.regexp",regex:/%[r]([(\[<{^|%])/,onMatch:function(e,t,n){n.length&&(n=[]);var r=e[e.length-1];return n.unshift(r,t),this.next="rState",this.token}}],{token:"punctuation",regex:"::"},d,{token:"variable.global",regex:"[$][a-zA-Z_\\d]+"},{token:"support.class",regex:"[A-Z][a-zA-Z_\\d]*"},{token:["punctuation.operator","support.function"],regex:/(\.)([a-zA-Z_\d]+)(?=\()/},{token:["punctuation.operator","identifier"],regex:/(\.)([a-zA-Z_][a-zA-Z_\d]*)/},{token:"string.character",regex:"\\B\\?(?:"+t+"|\\S)"},{token:"punctuation.operator",regex:/\?(?=.+:)/},u,g,s,i,h,o,l,c,{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"punctuation.separator.key-value",regex:"=>"},{stateName:"heredoc",onMatch:function(e,t,n){var r="-"==e[2]||"~"==e[2]?"indentedHeredoc":"heredoc",a=e.split(this.splitRegex);return n.push(r,a[3]),[{type:"constant",value:a[1]},{type:"string",value:a[2]},{type:"support.class",value:a[3]},{type:"string",value:a[4]}]},regex:"(<<[-~]?)(['\"`]?)([\\w]+)(['\"`]?)",rules:{heredoc:[{onMatch:function(e,t,n){return e===n[1]?(n.shift(),n.shift(),this.next=n[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^ +"},{onMatch:function(e,t,n){return e===n[1]?(n.shift(),n.shift(),this.next=n[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(e,t){return"heredoc"===t[0]||"indentedHeredoc"===t[0]?t[0]:e}},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|/|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\||\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]",onMatch:function(e,t,n){return this.next="","}"==e&&n.length>1&&"start"!=n[1]&&(n.shift(),this.next=n.shift()),this.token}},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:/[?:,;.]/}],comment:[{token:"comment.multiline",regex:"^=end(?=$|\\s.*$)",next:"start"},{token:"comment",regex:".+"}],qStateWithInterpolation:[{token:"string.start",regex:/[(\[<{]/,onMatch:function(e,t,n){return n.length&&e===n[0]?(n.unshift(e,t),this.token):"string"}},{token:"constant.language.escape",regex:t},{token:"constant.language.escape",regex:/\\./},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/[)\]>}^|%]/,onMatch:function(e,t,r){return r.length&&e===n[r[0]]?(r.shift(),this.next=r.shift(),this.token):(this.next="","string")}},{defaultToken:"string"}],qStateWithoutInterpolation:[{token:"string.start",regex:/[(\[<{]/,onMatch:function(e,t,n){return n.length&&e===n[0]?(n.unshift(e,t),this.token):"string"}},{token:"constant.language.escape",regex:/\\['\\]/},{token:"constant.language.escape",regex:/\\./},{token:"string.end",regex:/[)\]>}^|%]/,onMatch:function(e,t,r){return r.length&&e===n[r[0]]?(r.shift(),this.next=r.shift(),this.token):(this.next="","string")}},{defaultToken:"string"}],sStateWithoutInterpolation:[{token:"constant.other.symbol.ruby",regex:/[(\[<{]/,onMatch:function(e,t,n){return n.length&&e===n[0]?(n.unshift(e,t),this.token):"constant.other.symbol.ruby"}},{token:"constant.other.symbol.ruby",regex:/[)\]>}^|%]/,onMatch:function(e,t,r){return r.length&&e===n[r[0]]?(r.shift(),this.next=r.shift(),this.token):(this.next="","constant.other.symbol.ruby")}},{defaultToken:"constant.other.symbol.ruby"}],sStateWithInterpolation:[{token:"constant.other.symbol.ruby",regex:/[(\[<{]/,onMatch:function(e,t,n){return n.length&&e===n[0]?(n.unshift(e,t),this.token):"constant.other.symbol.ruby"}},{token:"constant.language.escape",regex:t},{token:"constant.language.escape",regex:/\\./},{token:"paren.start",regex:/#{/,push:"start"},{token:"constant.other.symbol.ruby",regex:/[)\]>}^|%]/,onMatch:function(e,t,r){return r.length&&e===n[r[0]]?(r.shift(),this.next=r.shift(),this.token):(this.next="","constant.other.symbol.ruby")}},{defaultToken:"constant.other.symbol.ruby"}],rState:[{token:"string.regexp",regex:/[(\[<{]/,onMatch:function(e,t,n){return n.length&&e===n[0]?(n.unshift(e,t),this.token):"constant.language.escape"}},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.regexp",regex:/\//},{token:"string.regexp",regex:/[)\]>}^|%][imxouesn]*/,onMatch:function(e,t,r){return r.length&&e[0]===n[r[0]]?(r.shift(),this.next=r.shift(),this.token):(this.next="","constant.language.escape")}},{include:"regex"},{defaultToken:"string.regexp"}],regex:[{token:"regexp.keyword",regex:/\\[wWdDhHsS]/},{token:"constant.language.escape",regex:/\\[AGbBzZ]/},{token:"constant.language.escape",regex:/\\g<[a-zA-Z0-9]*>/},{token:["constant.language.escape","regexp.keyword","constant.language.escape"],regex:/(\\p{\^?)(Alnum|Alpha|Blank|Cntrl|Digit|Graph|Lower|Print|Punct|Space|Upper|XDigit|Word|ASCII|Any|Assigned|Arabic|Armenian|Balinese|Bengali|Bopomofo|Braille|Buginese|Buhid|Canadian_Aboriginal|Carian|Cham|Cherokee|Common|Coptic|Cuneiform|Cypriot|Cyrillic|Deseret|Devanagari|Ethiopic|Georgian|Glagolitic|Gothic|Greek|Gujarati|Gurmukhi|Han|Hangul|Hanunoo|Hebrew|Hiragana|Inherited|Kannada|Katakana|Kayah_Li|Kharoshthi|Khmer|Lao|Latin|Lepcha|Limbu|Linear_B|Lycian|Lydian|Malayalam|Mongolian|Myanmar|New_Tai_Lue|Nko|Ogham|Ol_Chiki|Old_Italic|Old_Persian|Oriya|Osmanya|Phags_Pa|Phoenician|Rejang|Runic|Saurashtra|Shavian|Sinhala|Sundanese|Syloti_Nagri|Syriac|Tagalog|Tagbanwa|Tai_Le|Tamil|Telugu|Thaana|Thai|Tibetan|Tifinagh|Ugaritic|Vai|Yi|Ll|Lm|Lt|Lu|Lo|Mn|Mc|Me|Nd|Nl|Pc|Pd|Ps|Pe|Pi|Pf|Po|No|Sm|Sc|Sk|So|Zs|Zl|Zp|Cc|Cf|Cn|Co|Cs|N|L|M|P|S|Z|C)(})/},{token:["constant.language.escape","invalid","constant.language.escape"],regex:/(\\p{\^?)([^/]*)(})/},{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:/[/][imxouesn]*/,next:"start"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?(?:[:=!>]|<'?[a-zA-Z]*'?>|<[=!])|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"regexp.keyword",regex:/\[\[:(?:alnum|alpha|blank|cntrl|digit|graph|lower|print|punct|space|upper|xdigit|word|ascii):\]\]/},{token:"constant.language.escape",regex:/\[\^?/,push:"regex_character_class"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.keyword",regex:/\\[wWdDhHsS]/},{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:/&?&?\[\^?/,push:"regex_character_class"},{token:"constant.language.escape",regex:"]",next:"pop"},{token:"constant.language.escape",regex:"-"},{defaultToken:"string.regexp.characterclass"}]},this.normalizeRules()};r.inherits(_,a),t.RubyHighlightRules=_})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var r=e("../range").Range,a=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var a=n[1].length,s=e.findMatchingBracket({row:t,column:a});if(!s||s.row==t)return 0;var i=this.$getIndent(e.getLine(s.row));e.replace(new r(t,0,t,a-1),i)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(a.prototype),t.MatchingBraceOutdent=a})),ace.define("ace/mode/folding/ruby",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],(function(e,t,n){"use strict";var r=e("../../lib/oop"),a=e("./fold_mode").FoldMode,s=e("../../range").Range,i=e("../../token_iterator").TokenIterator,o=t.FoldMode=function(){};r.inherits(o,a),function(){this.indentKeywords={class:1,def:1,module:1,do:1,unless:1,if:1,while:1,for:1,until:1,begin:1,else:0,elsif:0,rescue:0,ensure:0,when:0,end:-1,case:1,"=begin":1,"=end":-1},this.foldingStartMarker=/(?:\s|^)(def|do|while|class|unless|module|if|for|until|begin|else|elsif|case|rescue|ensure|when)\b|({\s*$)|(=begin)/,this.foldingStopMarker=/(=end(?=$|\s.*$))|(^\s*})|\b(end)\b/,this.getFoldWidget=function(e,t,n){var r,a=e.getLine(n),s=this.foldingStartMarker.test(a),i=this.foldingStopMarker.test(a);if(s&&!i)if((r=a.match(this.foldingStartMarker))[1]){if("if"==r[1]||"else"==r[1]||"while"==r[1]||"until"==r[1]||"unless"==r[1]){if("else"==r[1]&&!1===/^\s*else\s*$/.test(a))return;if(!1===/^\s*(?:if|else|while|until|unless)\s*/.test(a))return}if("when"==r[1]&&!0===/\sthen\s/.test(a))return;if("keyword"===e.getTokenAt(n,r.index+2).type)return"start"}else{if(!r[3])return"start";if("comment.multiline"===e.getTokenAt(n,r.index+1).type)return"start"}if("markbeginend"!=t||!i||s&&i)return"";if("end"===(r=a.match(this.foldingStopMarker))[3]){if("keyword"===e.getTokenAt(n,r.index+1).type)return"end"}else{if(!r[1])return"end";if("comment.multiline"===e.getTokenAt(n,r.index+1).type)return"end"}},this.getFoldWidgetRange=function(e,t,n){var r,a=e.doc.getLine(n);return(r=this.foldingStartMarker.exec(a))?r[1]||r[3]?this.rubyBlock(e,n,r.index+2):this.openingBracketBlock(e,"{",n,r.index):(r=this.foldingStopMarker.exec(a))?"end"===r[3]&&"keyword"===e.getTokenAt(n,r.index+1).type||"=end"===r[1]&&"comment.multiline"===e.getTokenAt(n,r.index+1).type?this.rubyBlock(e,n,r.index+1):this.closingBracketBlock(e,"}",n,r.index+r[0].length):void 0},this.rubyBlock=function(e,t,n,r){var a=new i(e,t,n),o=a.getCurrentToken();if(o&&("keyword"==o.type||"comment.multiline"==o.type)){var l=o.value,c=e.getLine(t);switch(o.value){case"if":case"unless":case"while":case"until":if(!new RegExp("^\\s*"+o.value).test(c))return;var u=this.indentKeywords[l];break;case"when":if(/\sthen\s/.test(c))return;case"elsif":case"rescue":case"ensure":u=1;break;case"else":if(!new RegExp("^\\s*"+o.value+"\\s*$").test(c))return;u=1;break;default:u=this.indentKeywords[l]}var g=[l];if(u){var h=-1===u?e.getLine(t-1).length:e.getLine(t).length,d=t,_=[];if(_.push(a.getCurrentTokenRange()),a.step=-1===u?a.stepBackward:a.stepForward,"comment.multiline"==o.type){for(;o=a.step();)if("comment.multiline"===o.type)if(1==u){if(h=6,"=end"==o.value)break}else if("=begin"==o.value)break}else for(;o=a.step();){var f=!1;if("keyword"===o.type){var p=u*this.indentKeywords[o.value];switch(c=e.getLine(a.getCurrentTokenRow()),o.value){case"do":for(var k=a.$tokenIndex-1;k>=0;k--){var x=a.$rowTokens[k];if(x&&("while"==x.value||"until"==x.value||"for"==x.value)){p=0;break}}break;case"else":new RegExp("^\\s*"+o.value+"\\s*$").test(c)&&"case"!=l||(p=0,f=!0);break;case"if":case"unless":case"while":case"until":new RegExp("^\\s*"+o.value).test(c)||(p=0,f=!0);break;case"when":(/\sthen\s/.test(c)||"case"==l)&&(p=0,f=!0)}if(p>0)g.unshift(o.value);else if(p<=0&&!1===f){if(g.shift(),!g.length){if(("while"==l||"until"==l||"for"==l)&&"do"!=o.value)break;if("do"==o.value&&-1==u&&0!=p)break;if("do"!=o.value)break}0===p&&g.unshift(o.value)}}}if(!o)return null;if(r)return _.push(a.getCurrentTokenRange()),_;t=a.getCurrentTokenRow();if(-1===u){if("comment.multiline"===o.type)var m=6;else m=e.getLine(t).length;return new s(t,m,d-1,h)}return new s(d,h,t-1,e.getLine(t-1).length)}}}}.call(o.prototype)})),ace.define("ace/mode/ruby",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/ruby_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/folding/ruby"],(function(e,t,n){"use strict";var r=e("../lib/oop"),a=e("./text").Mode,s=e("./ruby_highlight_rules").RubyHighlightRules,i=e("./matching_brace_outdent").MatchingBraceOutdent,o=e("../range").Range,l=e("./folding/ruby").FoldMode,c=function(){this.HighlightRules=s,this.$outdent=new i,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new l,this.indentKeywords=this.foldingRules.indentKeywords};r.inherits(c,a),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),a=this.getTokenizer().getLineTokens(t,e).tokens;if(a.length&&"comment"==a[a.length-1].type)return r;if("start"==e){var s=t.match(/^.*[\{\(\[]\s*$/),i=t.match(/^\s*(class|def|module)\s.*$/),o=t.match(/.*do(\s*|\s+\|.*\|\s*)$/),l=t.match(/^\s*(if|else|when|elsif|unless|while|for|begin|rescue|ensure)\s*/);(s||i||o||l)&&(r+=n)}return r},this.checkOutdent=function(e,t,n){return/^\s+(end|else|rescue|ensure)$/.test(t+n)||this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){var r=t.getLine(n);if(/}/.test(r))return this.$outdent.autoOutdent(t,n);var a=this.$getIndent(r),s=t.getLine(n-1),i=this.$getIndent(s),l=t.getTabString();i.length<=a.length&&a.slice(-l.length)==l&&t.remove(new o(n,a.length-l.length,n,a.length))},this.getMatching=function(e,t,n){if(null==t){var r=e.selection.lead;n=r.column,t=r.row}var a=e.getTokenAt(t,n);if(a&&a.value in this.indentKeywords)return this.foldingRules.rubyBlock(e,t,n,!0)},this.$id="ace/mode/ruby",this.snippetFileId="ace/snippets/ruby"}.call(c.prototype),t.Mode=c})),ace.require(["ace/mode/ruby"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));