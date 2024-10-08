export function aceEditor() {
  $('textarea[data-editor="twig"],textarea[data-editor="yaml"],textarea[data-editor="json"]').each(function () {
    return transformTextareaToAce(this)
  })
}

export function transformTextareaToAce(textarea) {
  var textarea = $(textarea)
  var mode = textarea.data('editor')
  var editDiv = $('<div>', {
    position: 'absolute',
    width: textarea.width(),
    height: textarea.height(),
    class: textarea.attr('class'),
  }).insertBefore(textarea)
  textarea.css('display', 'none')
  var editor = ace.edit(editDiv[0])
  editor.renderer.setShowGutter(textarea.data('gutter'))
  editor.getSession().setValue(textarea.val())
  editor.getSession().setMode('ace/mode/' + mode)
  //editor.setFontSize("20px");
  editor.getSession().setUseWrapMode(true)
  //editor.setTheme("ace/theme/idle_fingers");

  if (textarea.attr('readonly')) {
    editor.setReadOnly(true)
    editor.commands.removeCommand('find')
  }

  if (!textarea.attr('data-editorjs')) {
    editor.commands.removeCommand('find')
  }

  // copy back to textarea on form submit...
  textarea.closest('form').submit(function () {
    textarea.val(editor.getSession().getValue())
  })
  return editor
}
