var clicked = false;
var imgIndex = 1;
var lastX = 0;
var limit = 5;
var speed = 1;
var cur = 0;
var curspeed = 0;
var frame = 0;
var lastspeed = 0;

$(document).ready(function () {
    $('#p1').on('dragstart', function (event) { event.preventDefault(); });

    $('#p1').on("mousedown", function (e) {
        clicked = true;
    });

    $('#p1').on("mouseup", function (e) {
        clicked = false;
    });

    $('#p1').on("mousemove", function (e) {
        if (clicked) {
            if (frame < 2) {
                frame++;
                return;
            }
            else {
                frame = 0;
            }

            
            // calculate right or left
            var offset = $(this).offset();
            var X = (e.pageX - offset.left);
            //var Y = (e.pageY - offset.top);
            if (lastX != 0) {
                var off = lastX - X;
                if (off > 0) {
                    //console.log("move right");
                    // use -
                    curspeed = -1;
                }
                else {
                    // use + 
                    curspeed = 1;
                }
                    
            }
            lastX = X;

            // if speed change , ignore first 3 time
            if (curspeed != lastspeed) {
                lastspeed = curspeed;
                curspeed = 0;
            }
            else {
                lastspeed = curspeed;
            }

            imgIndex += curspeed;
            if (imgIndex < 1) {
                imgIndex += 50;
            }
            else if (imgIndex > 50) {
                        imgIndex -= 50;
            }


            $(this).attr("src", "img/" + imgIndex + ".jpg");

            //if (cur < limit) {
            //    cur++;
            //    return;
            //}
            //else {
            //    cur = 0;
            //}

            //var offset = $(this).offset();
            //var X = (e.pageX - offset.left);
            ////var Y = (e.pageY - offset.top);
            //if (lastX != 0) {
            //    var off = lastX - X;
            //    console.log(off);
            //    if (off > 0) {
            //        //console.log("move right");
            //        imgIndex -= speed;
            //        if (imgIndex < 1) {
            //            imgIndex += 50;
            //        }
            //    }
            //    else {
            //        imgIndex += speed;
            //        if (imgIndex > 50) {
            //            imgIndex -= 50;
            //        }
            //        //console.log("move left");                   
            //    }
            //    $(this).attr("src", "img/" + imgIndex + ".jpg");
            //}
            //lastX = X;
            //console.log('X: ' + X + ', Y: ' + Y);
        }
    });
});