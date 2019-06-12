try {
    var path = "//cdn.jsdelivr.net/gh/Leohh123/Live2D@v1.0.0/demo/";
    $.ajax({url: path + "assets/jquery-ui.min.js?v=1.12.1", dataType:"script", cache: true, success: function() {
        $("<link>").attr({href: path + "assets/waifu.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
        $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
        $.ajax({url: path + "assets/waifu-tips.js?v=1.4.2", dataType:"script", cache: true, success: function() {
            $.ajax({url: path + "assets/live2d.min.js?v=1.0.5", dataType:"script", cache: true, success: function() {
                /* 可直接修改部分参数 */
                live2d_settings['hitokotoAPI'] = "hitokoto.cn";  // 一言 API
                live2d_settings['modelId'] = 1;                  // 默认模型 ID
                live2d_settings['modelTexturesId'] = 87;          // 默认材质 ID
                live2d_settings['modelStorage'] = false;         // 不储存模型 ID
                // custom:
                live2d_settings['modelAPI'] = "//live2d.fghrsh.net/api/";   // 自建 API 修改这里
                live2d_settings['canTurnToAboutPage'] = false;         // 显示 跳转关于页  按钮，可选 true(真), false(假)
                live2d_settings['waifuEdgeSide'] = "left:30";     // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
                live2d_settings['waifuDraggable'] = 'axis-x';    // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)


                /* 在 initModel 前添加 */
                initModel(path + "assets/waifu-tips.json");
                console.log("initModel");
            }});
        }});
    }});
} catch(err) { console.log("[Error] JQuery is not defined.") }
