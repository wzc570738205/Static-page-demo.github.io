var list = []
ss(s);
     function ss(data) {
        $("#updatetime").html(timeFormat(data.result.trackNumberUpdateTime));
        list = data.result.tracks;
        let songlist = data.result.tracks;
        let html = ''
        songlist.forEach((element, index) => {
            let num = index + 1;
            let bitrate = element.bMusic ? element.bMusic.bitrate : '';
            let user = '';
            element.artists.forEach(el => {
                user += el.name
            })
            html += `
            <div  class="text item">
                    <div  class="song">
                        <span>` + num + `</span>&nbsp;&nbsp;&nbsp;` + element.name + bitrate + `
                        <div class="zz">
                            <span > ` + user + `</span>
                        </div>
                        <i class="fa fa-play-circle-o fa-lg"></i>
                    </div>
                </div>
            `
            $("#songlist").html(html);
        });
    }

function timeFormat(ms) {
    if (ms) {
        return new Date(ms).toLocaleDateString().slice(0, 25);;
    } else {
        return "";
    }
}
var audio;
$("#songlist").on('click', '.item', function (e) {
    let item = $('.item');
    for (let i in item) {
        $('.item').eq(i).css('background', '#fff')
    }
    $(this).css('background', '#ccc')
    let index = $(this).index()
    $.ajax({
        type: "get",
        url: "https://api.imjad.cn/cloudmusic/?type=song&id=" + list[index].id,
        success: function (e) {
            if (audio) {
                audio.pause();
            }
            audio = new Audio();
            audio.pause();
            audio.src = e['data'][0].url;
            audio.load();
            audio.play();
        }
    });
});