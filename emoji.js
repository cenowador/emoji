//adds white overlay
var whiteoverlay = document.createElement('div');
whiteoverlay.id = 'emojis_whiteoverlay';
whiteoverlay.style.position = 'fixed';
whiteoverlay.style.display = 'flex';
whiteoverlay.style.justifyContent = 'center';
whiteoverlay.style.alignItems = 'center';
whiteoverlay.style.width = '100%';
whiteoverlay.style.height = '100%';
whiteoverlay.style.top = '0';
whiteoverlay.style.left = '0';
whiteoverlay.style.background = '#fff';
whiteoverlay.style.zIndex = '999999';
if(!$('#emojis_whiteoverlay').length){
	$(whiteoverlay).insertAfter('head');
}

function loadEmojis(){
	//looks for emotes
	var emojis = ['☂️', '☎️', '✂️', '✉️', '✏️', '❤️', '☕️', '⚰️', '⭐', '🌕', '🌡', '🌧', '🌱', '🌷', '🌹', '🌼', '🍄', '🍓', '🍞', '🍦', '🍩', '🍪', '🍮', '🍯', '🍰', '🍼', '🎀', '🎁', '🎃', '🎄', '🎗', '🎠', '🎻', '🏠', '🐁', '🐇', '🐈', '🐌', '🐑', '🐕', '🐝', '👒', '👗', '👚', '👜', '👶', '💉', '💊', '💌', '💐', '💓', '💕', '💖', '💗', '💘', '💝', '💟', '💻', '💿', '📍', '📚', '📱', '📷', '🔒', '🔪', '🖇', '🖋', '🗝', '🚲', '🛏', '🛼', '🤍', '🥄', '🥛', '🥞', '🥧', '🥿', '🦋', '🦷', '🧁', '🧇', '🧦', '🧴', '🧷', '🧸', '🧺', '🧼', '🩰', '🩳', '🩹', '🪑', '🪦', '🫖'];
	var inner = $('body').html();
	for(var i = 0; i < emojis.length; ++i){
		var regex = new RegExp(emojis[i], "g");
		var img = '<img src="https://middlepot.com/emoji/'+emojis[i]+'.gif" style="user-drag: none; -webkit-user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;"></img>';
		inner = inner.replace(regex, img);
	}
	inner = inner.replace('loadEmojis();', ''); //remove itself from the code
	$('body').html(inner);
}

$(window).on("load", function() {
	$('#emojis_whiteoverlay').hide();
});
