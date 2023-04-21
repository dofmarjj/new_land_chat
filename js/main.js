const answersArray = document.querySelectorAll(".answers-item");
function answersArrayStart() {
  const answersArray = (document.getElementById("questionAnswer").value = `
    (Могу ли я рассчитать ваш средний доход за день? - ${data1}), 
    (Довольны ли вы уровнем своего дохода? -  ${data2}),
    (Сколько часов в день вы тратите на работу? - ${data3}),
    (Сколько часов в день вы уделяете работе? ),
    (У вас есть пассивный источник дохода? - ${data5}),
    (Средний месячный доход пользователей составляет 7 000 $),
    (В котором часу вам было бы удобно ответить на звонок менеджера, чтобы активировать личный кабинет? - ${data6})`);
}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout("$('.body').css('transform','translateY(0)');", 1e3),
    setTimeout("$('.main-desc').addClass('b-show')", 1500),
    setTimeout("$('body').addClass('add-scroll')", 3e3),
    setTimeout("$('html').addClass('add-scroll')", 3e3),
    $(".glow-button").on("click", function () {
      $(".comment-item").addClass("comment-item-show"),
        $(".glow-button").addClass("hide"),
        $(".shine-button").addClass("show");
    });
  let choiceArray = [];
  let now = new Date(),
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;
  const massange = [
    {
      m: `Я рад приветствовать вас на официальной платформе для заработка "ChatGPT bot"! Я автоматический робот, созданный командой OpenAI для работы на финансовом рынке!`,
    },
    {
      m: `Моя работа заключается в анализе финансового рынка и заключении прибыльных сделок с акциями мировых компаний. Это позволяет получать стабильный доход от 1000 долларов в неделю без опыта, с минимальными вложениями! `,
    },
    {
      m: `Минимальная сумма инвестирования в наши фонды составляет 250 долларов, что делает наши инвестиционные продукты доступными для широкого круга инвесторов. Могу ли я рассчитать какую доходность вы можете получать? `,
    },

    {
      m: ` Довольны ли вы уровнем своего дохода? `,
    },
    {
      m: `Сколько часов в день вы тратите на работу? `,
    },

    {
      m: `У вас есть пассивный источник дохода? `,
    },

    {
      m: `Независимо от того, есть у вас опыт пассивного дохода или нет, я даю вам возможность получать пассивный доход с помощью моего искусственного интеллекта без каких-либо знаний и опыта! `,
    },
    {
      m: `Перейдем к следующему вопросу. `,
    },
    {
      m: `Среднемесячный доход пользователя составляет 7 358 долларов.<br> 
            При этом на использование бота нужно уделять до 2х часов в день! Сколько времени вы готовы уделять для работы с ботом? `,
    },
    {
      m: `Спасибо за заполнение опроса! Анализирую ваши ответы несколько секунд.... `,
    },
    {
      m: `У меня для вас хорошие новости, вы можете зарабатывать на платформе "ChatGPT bot". Ваш расчетный ежедневный доход составляет 375 долларов! Но через неделю, после оптимизации вычислительных процессов бота, эта сумма может стать больше, в среднем на 30-35%`,
    },
    {
      m: `Заполните форму ниже, после чего с вами свяжется менеджер платформы OpenAI и откроет доступ к вашему персональному боту для инвестирования!`,
    },
  ];
  var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    speedtext = 22,
    process = !0;
  function app() {
    var e = new Date(),
      s = ("0" + e.getMinutes()).slice(-2),
      t = ("0" + e.getHours()).slice(-2) + ":" + s;
    if ($(".chat").height() + 100 > $(".content").height()) {
      $("#scroll_id").removeClass("hide");
      var n = $(".inp").val();
      $(".inp").val(++n);
    }
    const c = `<div class="chat-content-item manager ">
            <div class="chat-content-desc">
                <div class="chat-content-desc-item manager">
                    <p class="message-time" id="time"> ${t} </p>
                    <p class="text" id="mass${mass_id}"></p>
                </div>
            </div>
        </div>`;
    $(".chat-content-list").append(c),
      "0" == document.getElementById("res").value
        ? $("#scroll_id").addClass("aba")
        : $("#scroll_id").removeClass("aba");
  }
  function myMassange(e) {
    var s = new Date(),
      t = ("0" + s.getMinutes()).slice(-2);
    let n = `<div class="chat-content-item user item-active">
            <div class="chat-content-desc">
                <div class="chat-content-desc-item user">
                    <p class="message-time" id="time"> 
                        ${("0" + s.getHours()).slice(-2) + ":" + t}
                    </p>
                    <p class="text"> 
                        ${e}
                    </p>
                </div>
            </div>
        </div>`;
    $(".chat-content-list").append(n),
      $(".content").animate(
        { scrollTop: $(".chat-content-list").height() },
        700
      ),
      $("#scroll_id").addClass("hide");
  }
  const answers = document.querySelectorAll(".inputAsnswers");
  function question1() {
    $(".chat-content-list").append(
      `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span id="answer1_1" class="question1M">
                        Начать
                    </span>
                </div>
                
            </div>`
    );
  }
  function choise1() {
    $(".question1M").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Начать"),
        choiceArray.push("Начать"),
        (answersArray[0].value = "Начать"),
        (data1 = "Начать"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
    $(".question1W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Нет"),
        choiceArray.push("Нет"),
        (answersArray[0].value = "Нет"),
        (data1 = "Нет"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
  }

  function question2() {
    $(".chat-content-list").append(
      `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span class="question2M">
                        Да, я доволен, но хотелось бы большего
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block show__invalid__form">
                    <span class="question2W">
                        Нет, я не доволен, я хотел бы больше
                    </span>
                </div>

                <div class="chat-content-buttons-gender-block show__invalid__form">
                    <span class="question2P">
                        Нет дохода
                    </span>
                </div>
            </div>`
    );
  }

  function question3() {
    $(".chat-content-list").append(
      `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span class="question3M">
                        2-5 часов
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question3W">
                        5-8 часов
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question3P">
                        Более 8 часов
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question3H">
                        Я не работаю
                    </span>
                </div>
              
            </div>`
    );
  }
  function choise3() {
    $(".question3M").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("2-5 часов"),
        choiceArray.push("2-5 часов"),
        (answersArray[2].value = "2-5 часов"),
        (data3 = "2-5 часов"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
    $(".question3W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("5-8 часов"),
        choiceArray.push("5-8 часов"),
        (answersArray[2].value = "5-8 часов"),
        (data3 = "5-8 часов"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
    $(".question3P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Более 8 часов"),
        choiceArray.push("Более 8 часов"),
        (answersArray[2].value = "Более 8 часов"),
        (data3 = "Более 8 часов"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
    $(".question3H").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Я не работаю"),
        choiceArray.push("Я не работаю"),
        (answersArray[2].value = "Я не работаю"),
        (data3 = "Я не работаю"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
  }

  function question5() {
    $(".chat-content-list").append(
      `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span class="question5M">
                        Да
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question5W">
                        Нет, но я хотел бы иметь
                    </span>
                </div>
            </div>`
    );
  }
  function choise5() {
    $(".question5M").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Да"),
        choiceArray.push("Да"),
        (answersArray[4].value = "Да"),
        (data5 = "Да"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
    $(".question5W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Нет, но я хотел бы иметь"),
        choiceArray.push("Нет, но я хотел бы иметь"),
        (answersArray[4].value = "Нет, но я хотел бы иметь"),
        (data5 = "Нет, но я хотел бы иметь"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
  }

  function question6() {
    $(".chat-content-list").append(
      `<div class="chat-content-buttons-gender">
                <div class="chat-content-buttons-gender-block">
                    <span class="question6M">
                        До 1 часа в день
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question6W">
                    До 2 часов в день
                    </span>
                </div>
                <div class="chat-content-buttons-gender-block">
                    <span class="question6P">
                    В любой момент
                    </span>
                
            </div>`
    );
  }
  function choise6() {
    $(".question6M").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("До 1 часа в день "),
        choiceArray.push("До 1 часа в день "),
        (answersArray[5].value = "До 1 часа в день"),
        (data6 = "До 1 часа в день"),
        answersArrayStart(),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
    $(".question6W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("До 2 часов в день"),
        choiceArray.push("До 2 часов в день"),
        (answersArray[5].value = "До 2 часов в день"),
        (data6 = "До 2 часов в день"),
        answersArrayStart(),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
    $(".question6P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("В любой момент"),
        choiceArray.push("В любой момент"),
        (answersArray[5].value = "В любой момент"),
        (data6 = "В любой момент"),
        answersArrayStart(),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
  }

  setTimeout(() => {
    var e = new Date(),
      s = ("0" + e.getMinutes()).slice(-2);
    const t = `<div class="chat-content-item manager ">
            <div class="chat-content-desc">
                <div class="chat-content-desc-item manager">
                    <p class="message-time" id="time"> ${
                      ("0" + e.getHours()).slice(-2) + ":" + s
                    } </p>
                    <p class="text" id="mass${mass_id}"></p>
                </div>
            </div>
        </div>`;
    $(".chat-content-list").append(t),
      $("#scroll_id").click(function (e) {
        $(this).removeClass("hide-q"),
          $(".content").animate({ scrollTop: $(".chat").height() }, 700);
      });
    // $('.question2W').click(function (e) {
    //     clearInterval(n)

    // })
    const n = setInterval(function () {
      if (1 == process)
        if (lengt_num_mas != massange.length) {
          if (
            ((text += massange[lengt_num_mas].m[length_mass]),
            length_mass++,
            $("#mass" + lengt_num_mas).html(text),
            2 === lengt_num_mas &&
              length_mass === massange[lengt_num_mas].m.length - 1 &&
              (question1(),
              (process = !1),
              choise1(),
              $("#scroll_id").addClass("hide-q"),
              $(".content").animate({ scrollTop: $(".chat").height() }, 700),
              $("#scroll_id").removeClass("hide-q")),
            3 === lengt_num_mas &&
              length_mass === massange[lengt_num_mas].m.length - 1 &&
              (question2(),
              (process = !1),
              choise2(),
              $("#scroll_id").addClass("hide-q"),
              $(".content").animate({ scrollTop: $(".chat").height() }, 700),
              $("#scroll_id").removeClass("hide-q")),
            4 === lengt_num_mas &&
              length_mass === massange[lengt_num_mas].m.length - 1 &&
              (question3(),
              (process = !1),
              choise3(),
              $("#scroll_id").addClass("hide-q"),
              $(".content").animate({ scrollTop: $(".chat").height() }, 700),
              $("#scroll_id").removeClass("hide-q")),
            5 === lengt_num_mas &&
              length_mass === massange[lengt_num_mas].m.length - 1 &&
              (question5(),
              (process = !1),
              choise5(),
              $("#scroll_id").addClass("hide-q"),
              $(".content").animate({ scrollTop: $(".chat").height() }, 700),
              $("#scroll_id").removeClass("hide-q")),
            8 === lengt_num_mas &&
              length_mass === massange[lengt_num_mas].m.length - 1 &&
              (question6(),
              (process = !1),
              choise6(),
              $("#scroll_id").addClass("hide-q"),
              $(".content").animate({ scrollTop: $(".chat").height() }, 700),
              $("#scroll_id").removeClass("hide-q")),
            length_mass == massange[lengt_num_mas].m.length)
          ) {
            lengt_num_mas++, mass_id++, (length_mass = 0), (text = ""), app();
          }
        } else
          clearInterval(n),
            $("#mass" + lengt_num_mas)
              .parent()
              .parent()
              .css("display", "none"),
            $(".iframe-form").addClass("show"),
            $(".btn-top").addClass("show"),
            $(".reviews").removeClass("hide");
    }, speedtext);
    function choise2() {
      $(".question2M").click(() => {
        (document.querySelector(".chat-content-buttons-gender").style.display =
          "none"),
          myMassange("Да, я доволен, но хотелось бы большего"),
          choiceArray.push("Да, я доволен, но хотелось бы большего"),
          (answersArray[1].value = "Да, я доволен, но хотелось бы большего"),
          (data2 = "Да, я доволен, но хотелось бы большего"),
          $(".chat-content-buttons-gender").css("display", "none"),
          setTimeout(() => {
            process = !0;
          }, 500);
      });
      $(".question2W").click(() => {
        (document.querySelector(".chat-content-buttons-gender").style.display =
          "none"),
          myMassange("Нет, я не доволен, я хотел бы больше"),
          choiceArray.push("Нет, я не доволен, я хотел бы больше"),
          (answersArray[1].value = "Нет, я не доволен, я хотел бы больше"),
          (data2 = "Нет, я не доволен, я хотел бы больше"),
          $(".chat-content-buttons-gender").css("display", "none"),
          setTimeout(() => {
            process = !0;
          }, 500);
      });

      $(".question2P").click(() => {
        (document.querySelector(".chat-content-buttons-gender").style.display =
          "none"),
          myMassange("Нет дохода"),
          choiceArray.push("Нет дохода"),
          (answersArray[1].value = "Нет дохода"),
          (data2 = "Нет дохода"),
          $(".chat-content-buttons-gender").css("display", "none"),
          setTimeout(() => {
            process = !0;
          }, 500);
      });
    }
  }, 1e3),
    $(".content").scroll(function () {
      "0" == document.getElementById("res").value
        ? $("#scroll_id").addClass("aba")
        : $("#scroll_id").removeClass("aba");
    });
  var $marker = $("#down-box");
  $(".content").scroll(function () {
    $(".content").scrollTop() + $(".content").height() >=
    $(".chat").height() + 100
      ? ((document.getElementById("res").value = "0"),
        $("#scroll_id").addClass("hide"))
      : $("#scroll_id").removeClass("hide");
  });

  // var _0x4b68 = [
  //     "\x61",
  //     "\x6C\x65\x6E\x67\x74\x68",
  //     "\x68\x61\x73\x68",
  //     "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74",
  //     "\x74\x6F\x70",
  //     "\x6F\x66\x66\x73\x65\x74",
  //     "\x61\x6E\x69\x6D\x61\x74\x65",
  //     "\x68\x74\x6D\x6C\x2C\x20\x62\x6F\x64\x79",
  //     "\x63\x6C\x69\x63\x6B",
  //     "\x65\x61\x63\x68",
  // ];
  // $[_0x4b68[9]]($(_0x4b68[0]), function (_0x5eadx1, _0x5eadx2) {
  //     if (_0x5eadx2[_0x4b68[2]][_0x4b68[1]] == 0) {
  //         return;
  //     }
  //     $(_0x5eadx2)[_0x4b68[8]](function (_0x5eadx3) {
  //         _0x5eadx3[_0x4b68[3]]();
  //         $(_0x4b68[7])[_0x4b68[6]]({ scrollTop: $(_0x5eadx2[_0x4b68[2]])[_0x4b68[5]]()[_0x4b68[4]] }, 2000);
  //     });
  // });

  // var _0x95cc = [
  //     "\x61",
  //     "\x6C\x65\x6E\x67\x74\x68",
  //     "\x68\x61\x73\x68",
  //     "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74",
  //     "\x74\x6F\x70",
  //     "\x6F\x66\x66\x73\x65\x74",
  //     "\x61\x6E\x69\x6D\x61\x74\x65",
  //     "\x68\x74\x6D\x6C\x2C\x20\x62\x6F\x64\x79",
  //     "\x63\x6C\x69\x63\x6B",
  //     "\x65\x61\x63\x68",
  // ];
  // $[_0x95cc[9]]($(_0x95cc[0]), function (_0x95cex1, _0x95cex2) {
  //     if (_0x95cex2[_0x95cc[2]][_0x95cc[1]] == 0) {
  //         return;
  //     }
  //     $(_0x95cex2)[_0x95cc[8]](function (_0x95cex3) {
  //         _0x95cex3[_0x95cc[3]]();
  //         $(_0x95cc[7])[_0x95cc[6]]({ scrollTop: $(_0x95cex2[_0x95cc[2]])[_0x95cc[5]]()[_0x95cc[4]] }, 2000);
  //     });
  // });

  // var _0xaf39 = [
  //     "\x6F\x6E\x6C\x6F\x61\x64",
  //     "\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75",
  //     "\x62\x6F\x64\x79",
  //     "\x73\x65\x6C\x65\x63\x74\x73\x74\x61\x72\x74",
  //     "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74",
  //     "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72",
  //     "\x6B\x65\x79\x64\x6F\x77\x6E",
  //     "\x6B\x65\x79\x43\x6F\x64\x65",
  //     "\x4D\x61\x63",
  //     "\x6D\x61\x74\x63\x68",
  //     "\x70\x6C\x61\x74\x66\x6F\x72\x6D",
  //     "\x6D\x65\x74\x61\x4B\x65\x79",
  //     "\x63\x74\x72\x6C\x4B\x65\x79",
  //     "\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E",
  // ];
  // window[_0xaf39[0]] = function () {
  //     document[_0xaf39[2]][_0xaf39[1]] = function () {
  //         return false;
  //     };
  //     window[_0xaf39[5]](_0xaf39[3], function (_0x8685x1) {
  //         _0x8685x1[_0xaf39[4]]();
  //     });
  //     document[_0xaf39[5]](
  //         _0xaf39[6],
  //         function (_0x8685x1) {
  //             if (_0x8685x1[_0xaf39[7]] == 83 && (navigator[_0xaf39[10]][_0xaf39[9]](_0xaf39[8]) ? _0x8685x1[_0xaf39[11]] : _0x8685x1[_0xaf39[12]])) {
  //                 _0x8685x1[_0xaf39[4]]();
  //                 _0x8685x1[_0xaf39[13]]();
  //             }
  //         },
  //         false
  //     );
  // };
});
