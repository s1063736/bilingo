
//對對碰

let cardID, clicks = 0, team = 1, z_indexCount = 0, score
let dingAudio = $('#ding')[0]
let yesAudio = $('#yes')[0]
let noAudio = $('#no')[0]
let bgm = $('#bgm')[0]


$('body').on('click', function () {
    bgm.muted = false;
    bgm.play()
    console.log('bgmOK')
})

$('.team1').on('click', function () {
    dingAudio.play()
    team = 1
    $('.team').css({
        'filter': 'none'
    })
    $(this).css({
        'filter': 'drop-shadow(0 0 5px #ffe600)'
    })
})
$('.team2').on('click', function () {
    dingAudio.play()
    team = 2
    $('.team').css({
        'filter': 'none'
    })
    $(this).css({
        'filter': 'drop-shadow(0 0 5px #ffe600)'
    })
})
$('.team3').on('click', function () {
    dingAudio.play()
    team = 3
    $('.team').css({
        'filter': 'none'
    })
    $(this).css({
        'filter': 'drop-shadow(0 0 5px #ffe600)'
    })
})
$('.team4').on('click', function () {
    dingAudio.play()
    team = 4
    $('.team').css({
        'filter': 'none'
    })
    $(this).css({
        'filter': 'drop-shadow(0 0 5px #ffe600)'
    })
})

$('.popbtn').on('click', function () {
    $('.poppage').fadeIn(500)
    $('.gamewrap').animate({
        top: '50%'
    }, 500)
})

$('.card').on('click', function () {

    clicks++

    $(this).css({
        transform: 'rotateY(180deg)'
    })

    if (clicks == 2) {

        setTimeout(() => {

            if (cardID == $(this).attr('name')) {

                yes(cardID)

                score = $('.team' + team + ' .score').html()
                setTimeout(() => {
                    $('.team' + team + ' .score').html(parseInt(score) + 2)
                }, 1100);

            } else {

                no(cardID, $(this).attr('name'))

            }

        }, 800);

        clicks = 0

    } else {

        cardID = $(this).attr('name')

    }

})


function yes(name) {

    z_indexCount++

    $("div[name='" + name + "']").css({
        position: 'absolute',
        'background-color': '#63809b',
        'pointer-events': 'none',
        'z-index': z_indexCount,
        transform: 'rotateY(180deg) scale(0.8)',
    })

    switch (team) {
        case 1:
            $("div[name='" + name + "']").css({
                top: '0px',
                left: '-260px',
            })

            break;
        case 2:
            $("div[name='" + name + "']").css({
                top: '0px',
                left: '920px',
            })

            break;
        case 3:
            $("div[name='" + name + "']").css({
                top: '600px',
                left: '-260px',
            })

            break;
        case 4:
            $("div[name='" + name + "']").css({
                top: '600px',
                left: '920px',
            })

            break;

        default:
            break;
    }
}

function no(card1, card2) {

    $("div[name='" + card1 + "'], div[name='" + card2 + "']").css({
        transform: 'rotateY(0deg)'
    })

}


//單字重組

let ansArray = []
let nowQus = 1
let oriTop = 366.890625
let position4 = [0, 0, 0, 0]
let position3 = [0, 0, 0]
let cube4oriX = ['0', '290', '580', '870']
let cube3oriX = ['0', '290', '580']
let correct = [
    'Chr', 'ist', 'mas', 'tree',
    'San', 'ta', 'Cl', 'aus',
    'Re', 'in', 'de', 'er',
    'Mis', 'tle', 'toe','',
    'Sl', 'e', 'igh','',
    'Can', 'dy', 'c', 'ane'
]




$('.cube').on('click', function () {

    if ($(this).position().top == oriTop) {

        $(this).css({
            top: '25%'
        })

        if (nowQus == 4 || nowQus == 5) {

            for (let i = 0; i < position3.length; i++) {
                if (position3[i] == 0) {

                    $(this).css({
                        left: cube3oriX[i] + 'px'
                    })

                    position3[i] = 1
                    ansArray[i] = $(this).html()

                    
                    if ($(this).html() == correct[(nowQus - 1) * 4 + i]) {
                        yesAudio.play()
                        console.log($(this).html() + '/' + correct[(nowQus - 1) * 4 + i])
                    } else {
                        noAudio.play()
                        console.log($(this).html() + '/' + correct[(nowQus - 1) * 4 + i])
                    }

                    break;
                }
            }

        } else {


            for (let i = 0; i < position4.length; i++) {
                if (position4[i] == 0) {

                    $(this).css({
                        left: cube4oriX[i] + 'px'
                    })

                    position4[i] = 1
                    ansArray[i] = $(this).html()


                    if ($(this).html() == correct[(nowQus - 1) * 4 + i]) {
                        yesAudio.play()
                        console.log($(this).html() + '/' + correct[(nowQus - 1) * 4 + i])
                    } else {
                        noAudio.play()
                        console.log($(this).html() + '/' + correct[(nowQus - 1) * 4 + i])
                    }

                    break;
                }
            }
        }


    } else {


        if (nowQus == 4 || nowQus == 5) {

            for (let k = 0; k < position3.length; k++) {

                if (cube3oriX[k] == $(this).position().left) {

                    position3[k] = 0
                    ansArray[k] = ''

                    break;
                }
            }

            $(this).css({
                top: '55%',
                left: cube3oriX[$(this).index()] + 'px'
            })

            for (let i = 0; i < ansArray.length; i++) {
                if (ansArray[i] == $(this).html()) {

                    ansArray[i] = ''

                    break;
                }
            }

        } else {


            for (let k = 0; k < position4.length; k++) {

                if (cube4oriX[k] == $(this).position().left) {

                    position4[k] = 0
                    ansArray[k] = ''

                    break;
                }
            }

            $(this).css({
                top: '55%',
                left: cube4oriX[$(this).index()] + 'px'
            })

            for (let i = 0; i < ansArray.length; i++) {
                if (ansArray[i] == $(this).html()) {

                    ansArray[i] = ''

                    break;
                }
            }
        }
    }

    checkAns(ansArray.join(''))
})

function checkAns(ans) {

    if (ans == 'Christmastree') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
        }, 5000);


        setTimeout(() => {
            $('.gamewrap').css('top', '-50%')
            $('.game1').hide()
            $('.game2').show()
            $('.mask').hide()
        }, 5500);

        nowQus++
        ansArray = []
        position4 = [0, 0, 0, 0]
        position3 = [0, 0, 0]

    } else if (ans == 'SantaClaus') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
        }, 5000);

        setTimeout(() => {
            $('.gamewrap').css('top', '-50%')
            $('.game2').hide()
            $('.game3').show()
            $('.mask').hide()
        }, 5500);

        nowQus++
        ansArray = []
        position4 = [0, 0, 0, 0]
        position3 = [0, 0, 0]

    } else if (ans == 'Reindeer') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
        }, 5000);

        setTimeout(() => {
            $('.gamewrap').css('top', '-50%')
            $('.game3').hide()
            $('.game4').show()
            $('.mask').hide()
        }, 5500);

        nowQus++
        ansArray = []
        position4 = [0, 0, 0, 0]
        position3 = [0, 0, 0]

    } else if (ans == 'Mistletoe') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
        }, 5000);

        setTimeout(() => {
            $('.gamewrap').css('top', '-50%')
            $('.game4').hide()
            $('.game5').show()
            $('.mask').hide()
        }, 5500);

        nowQus++
        ansArray = []
        position4 = [0, 0, 0, 0]
        position3 = [0, 0, 0]

    } else if (ans == 'Sleigh') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
        }, 5000);

        setTimeout(() => {
            $('.gamewrap').css('top', '-50%')
            $('.game5').hide()
            $('.game6').show()
            $('.mask').hide()
        }, 5500);

        nowQus++
        ansArray = []
        position4 = [0, 0, 0, 0]
        position3 = [0, 0, 0]

    } else if (ans == 'Candycane') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
        }, 5000);

        setTimeout(() => {
            $('.gamewrap').css('top', '-50%')
            $('.game6').hide()
            $('.game1').show()
            $('.mask').hide()
        }, 5500);

        nowQus = 1
        ansArray = []
        position4 = [0, 0, 0, 0]
        position3 = [0, 0, 0]

    }


}