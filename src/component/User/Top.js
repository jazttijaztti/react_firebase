import React from 'react'
import '../../css/user/index.css';
import '../../css/user/reset.css';
import '../../js/user/index.js';


import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


const Top = () => {
    return (
        <React.Fragment>

    <div className="wapper">
       <div className="header">
         <div className="header_inner">
           <div className="header_logo">
             <img src="images/logo_b.png" alt="" />
           </div>
           <ul className="header_menu">
             <a href="#toha"><li>コンサルタントの思い</li></a>
             <a href="#naiyou"><li>まずは資産形成から</li></a>
             <a href="#voice"><li>起業した方々の声</li></a>
             <a href="#question_answerr"><li>Q&A</li></a>
             <a href="#course"><li>ご相談ください</li></a>
           </ul>
           <a href="#contact"><div className="header_contact">
             お問い合わせ
           </div></a>
           <div id="navToggle">
               <div>
                <span></span> <span></span> <span></span>
               </div>
             </div>
             <nav>
               <ul>
                 <a href="#naiyou"><li>コンサルタントの思い</li></a>
                 <a href="#toha"><li>まずは資産形成から</li></a>
                 <a href="#voice"><li>起業した方々の声</li></a>
                 <a href="#question_answer"><li>Q&A</li></a>
                 <a href="#course"><li>ご相談ください</li></a>
                 <a href="#contact"><li>お問い合わせ</li></a>
               </ul>
             </nav>
         </div>
       </div>
       <div className="top_content">
         <div className="top_image">
           <div className="top_image_item">

           </div>
         </div>
         <div className="top_catch">
           <h2>脱サラして地方へ</h2>
           <h3>脱サラコンサルタントが<br />
           脱サラの準備から融資まで
           夢を叶えるお手伝いをします。</h3>
           <div className="top_logo">
               <img src="images/logo_b.png" alt="" />
           </div>
           <div className="top_marubox">
               <div className="marubox">
                <div className="marubox_text">
                   <p>まずは</p>
                   <h4>無料相談から</h4>
                </div>
               </div>
               <div className="marubox">
                 <div className="marubox_text">
                   <p>起業お祝い金</p>
                   <h4>50万円進呈</h4>
                 </div>
               </div>
               <div className="marubox">
                 <div className="marubox_text">
                   <p>起業後も</p>
                   <h4>サポートします</h4>
                </div>
               </div>
           </div>
           <div className="top_qa">
             <ul>
               <li>資金に不安がある…</li>
               <li>税金ってどうするの？</li>
               <li>起業の仕方を教えてほしい</li>
             </ul>
             <div className="top_contact">
               まずは無料で<br />コンサルタントに相談してみる
             </div>
           </div>
         </div>
       </div>
        <div id="naiyou">
          <h3 className="title">
            コンサルタントの思い
          </h3>
            <div className="naiyou_boxes">
              <div className="naiyou_box">
                <div className="naiyou_box_title">1</div>
                <div className="naiyou_box_content">
                  <div className=" naiyou_box_text">
                    <h5>脱サラ起業する方の力になりたい</h5>
                    <p>脱サラ・起業は勇気のいるもの。そんな勇気を持った初めて起業をする皆さんの力になりたいと考えています。 メイドインジャパン企業を応援します。</p>
                  </div>
                  <div className="naiyou_box_img" >
                    <img src="images/naiyou1.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="naiyou_box">
                <div className="naiyou_box_title">2</div>
                <div className="naiyou_box_content">
                  <div className=" naiyou_box_text">
                    <h5>所属企業の力を借りて起業資金を調達するという手</h5>
                    <p>
                      定年退職・早期退職をする前に。所属企業のネームバリュー・信用を武器に融資を受け、起業資金に。
                    </p>
                  </div>
                  <div className="naiyou_box_img" >
                    <img src="images/naiyou2.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="naiyou_box">
                <div className="naiyou_box_title">3</div>
                <div className="naiyou_box_content">
                  <div className=" naiyou_box_text">
                    <h5>地方での起業。地方活性化にも一役買います</h5>
                    <p>
                      地方での生活、拠点を東京から地方に移し起業。 事業の拡大に成功すれば、地域活性化にも繋がります。 地方の土地ももっと活性化させたい。株式会社ジーエステートはそんな可能性も担っています。
                    </p>
                  </div>
                  <div className="naiyou_box_img">
                    <img src="images/naiyou3.svg" alt="" />
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div id="toha">
          <h3 className="title">
            まずは資産形成から
          </h3>
          <div className="toha_boxes">
             <div className="toha_box">
               <div className="toha_box_title">
                 <img src="images/toha1.svg" alt="" />
                 <h4>企業に所属している間に！</h4>
               </div>
               <div className="toha_box_text">
                 所属企業の信用やネームバリューを盾に”資産を作る”。
               </div>
             </div>
             <div className="toha_box">
                <div className="toha_box_title">
                  <img src="images/toha2.svg" alt="" />
                  <h4>資産を元に銀行から起業のための融資を</h4>
                </div>
                <div className="toha_box_text">
                  資産を元に銀行から起業で必要な資金調達を。
                  早期退社・定年退職して起業に専念しましょう。
                </div>
             </div>
             <div className="toha_box">
                <div className="toha_box_title">
                  <img src="images/toha3.svg" alt="" />
                  <h4>事業に専念</h4>
                </div>
                <div className="toha_box_text">
                  資本の心配はなし！起業や事業拡大に集中してください。
                  その後の運用投資もお任せ下さい。
                </div>
             </div>
          </div>

        </div>

         <div id="voice">
           <h3 className="title">
             起業した方々の声
           </h3>
           <div className="vice_slide">

             <div className="slider">

               <div className="student_voice">
                 <div className="student_voice_innner">
                   <div className="student">
                       <div className="student_img">
                       </div>
                       <h3>飲食店</h3>
                       <p>30代</p>
                   </div>
                   <div className="student_text">
                     <p>
                      起業する際のタイミングや資金調達に悩んでいました。 起業した今考えると、最適なタイミング・調達方法だったと思います。<br />
                      事業計画やコンセプトにあった物件探しにも相談に乗っていただき、素敵なお店を持つことができました！<br />
                      これから頑張りたいと思います！
                    </p>
                      <div className="voice_link_inner">
                       <a href="#" className="voice_link">飲食店に転職した方々の声をみる</a>
                     </div>
                   </div>
                </div>
               </div>

               <div className="student_voice">
                 <div className="student_voice_innner">
                   <div className="student">
                     <div className="student_img">
                     </div>
                     <h3>農業</h3>
                     <p>40代</p>
                   </div>
                   <div className="student_text">
                     <p>
                     資金が足りなく悩みの種でした。しかし今ではなんの問題もなく、事業に専念できています。<br />
                     さらに農業の経験もなかったわたしに地方ででの研修先を紹介していただき、充分な知識をつけてから起業することができました！<br />
                     また、土地探しにも協力していただき感謝しています。
                     </p>
                     <div className="voice_link_inner">
                      <a href="#" className="voice_link">農業に転職した方々の声をみる</a>
                    </div>
                   </div>
                 </div>
               </div>

               <div className="student_voice">
                 <div className="student_voice_innner">
                   <div className="student">
                     <div className="student_img">
                     </div>
                     <h3>職人</h3>
                     <p>50代</p>
                   </div>
                   <div className="student_text">
                     <p>
                      職人になって10年が経ち、独立を考えましたが資金面に不安がありました。<br />
                      都心で起業するとなると、資金もさらに必要になるので諦めかけていたところ、このサービスを知りました。<br />
                      生涯都心で暮らそうとは思っていなかったので、これをいいきっかけとして地方で起業することにしました。<br />
                      資金の他にも税金のことなどにも相談に乗っていただき助かりました！
                     </p>
                     <div className="voice_link_inner">
                      <a href="#" className="voice_link">職人に転職した方々の声をみる</a>
                    </div>
                   </div>
                  </div>
               </div>

             </div>
           </div>
         </div>
          <div id="question_answer">
            <h3 className="title">
              よくある質問
            </h3>
              <div className="qa_content">
                <div className="qabox">
                    <div className="accordion1">
                        <div className="question">
                          <div className="qtext">Q.  脱サラ・起業をしている方の年齢層を教えて下さい。</div>
                          <div className="shitayajirushi">
                            <img src="images/shitaw.svg" alt="" />
                          </div>
                        </div>
                        <div className="answer">
                            <div className="atext">
                              A.  30代の方〜60代の方まで、幅広い年齢層の方が脱サラ起業に成功されています。
                              <a href="#"><div className="columnlink">
                              <img src="images/right_top.svg" alt="" />
                              <p>年齢層別に起業コラムを読む</p>
                            </div></a>
                            </div>
                        </div>
                  </div>
                  <div className="accordion1">
                      <div className="question">
                        <div className="qtext">Q.  起業するタイミング、早期退職するか、定年退職まで待つかを悩んでいます。</div>
                        <div className="shitayajirushi">
                          <img src="images/shitaw.svg" alt="" />
                        </div>
                      </div>
                      <div className="answer">
                          <div className="atext">
                            A.  企業のネームバリューや信頼がある間に資金を準備し、起業することをオススメしています。 早期退職・定年退職より、「企業に所属している間にどれだけ準備ができるか」が大切です。
                            <a href="#"><div className="columnlink">
                            <img src="images/right_top.svg" alt="" />
                            <p>早期退職 / 定年退職に関する起業コラムを読む</p>
                          </div></a>
                          </div>
                      </div>
                  </div>
                  <div className="accordion1">
                      <div className="question">
                        <div className="qtext">Q.  女性でも起業出来ますか？</div>
                        <div className="shitayajirushi">
                          <img src="images/shitaw.svg" alt="" />
                        </div>
                      </div>
                      <div className="answer">
                          <div className="atext">
                            A.  もちろん、性別に関わらず起業することは可能です。 女性独自の視点を持って起業し事業を成功している方も多くいらっしゃいます。
                            <a href="#"><div className="columnlink">
                            <img src="images/right_top.svg" alt="" />
                            <p>女性に関する起業コラムを読む</p>
                          </div></a>
                          </div>
                      </div>
                  </div>
                  <div className="accordion1">
                      <div className="question">
                        <div className="qtext">Q.  起業の仕方を教えてください</div>
                        <div className="shitayajirushi">
                          <img src="images/shitaw.svg" alt="" />
                        </div>
                      </div>
                      <div className="answer">
                          <div className="atext">
                            A.  起業をするにはもちろん資金が必要不可欠。 資金を集めるためのノウハウから、その後の起業〜事業成功までのHOW TOを紹介しています。 税金周りの支援やアドバイスなど、全力であなたをサポートします。
                            <a href="#"><div className="columnlink">
                            <img src="images/right_top.svg" alt="" />
                            <p>起業の仕方(HOW TO)コラムを読む</p>
                          </div></a>
                          </div>
                      </div>
                  </div>
                  <div className="accordion1">
                      <div className="question">
                        <div className="qtext">Q.  補助金・助成金？お祝い金？</div>
                        <div className="shitayajirushi">
                          <img src="images/shitaw.svg" alt="" />
                        </div>
                      </div>
                      <div className="answer">
                          <div className="atext">
                            A.  国や自治体は、積極的に地域活性化を支援しています。 さまざまな補助金や融資制度で資金を調達することが可能です。 また、起業お祝い金として株式会社ジーエステートから50万円を差し上げております。
                            <a href="#"><div className="columnlink">
                            <img src="images/right_top.svg" alt="" />
                            <p>補助金・助成金に関するコラムを読む</p>
                          </div></a>
                      </div>
                  </div>
                 </div>

                </div>
               </div>
          </div>
           <div id="course">
             <h3 className="title">
              お気軽にご相談ください
             </h3>
             <div className="okigaru">
        <div className="okigarumain">
          <div className="nagare">
            <div className="nagaretext">
              <h4 className="nagareno">01.</h4>
              <h3 className="nagaretitle">お問い合わせ</h3>
              <p className="nagaredetail">まずは下記登録フォームから必須項目を入力し、お問い合わせを。
                                      ご相談だけでもお気軽にご連絡ください。</p>
            </div>
            <div className="nagareimg1">

            </div>
          </div>
          <div className="nagare">
            <div className="nagaretext">
              <h4 className="nagareno">02.</h4>
              <h3 className="nagaretitle">資金調達・起業のアドバイス</h3>
              <p className="nagaredetail">起業の際に必要な資金調達や、起業のアドバイスを致します。
                                      地方へのパイプもありますので、安心してお任せください。</p>
            </div>
            <div className="nagareimg2">

            </div>
          </div>
          <div className="nagare">
            <div className="nagaretext">
              <h4 className="nagareno">03.</h4>
              <h3 className="nagaretitle">しっかりとしたアフターサービス</h3>
              <p className="nagaredetail">地方に移り住んだ後も、ご相談に乗ります。
                                      株式会社ジーエステートはあなたの起業をサポートし続けます。</p>
            </div>
            <div className="nagareimg3">

            </div>
          </div>
        </div>
      </div>
           </div>
           <div id="contact">
             <h3 className="title">
               お問い合わせ
             </h3>
             <div className="contact_form">
                <img src="images/QR.png" />
              </div>
           </div>
            <div className="footer">
              <div className="footer_top">
                <a href="index.html"><img src="images/logo_a.png" alt="" /></a>
                <p>夢を叶える<br />
                脱サラコンサルタント</p>
              </div>
              <div className="footer_bottom">
                <p className="copy">Copyright &copy;  ALL RIGHTS RESERVED.</p>
              </div>
            </div>
            <div className="otoiawase_bottom">
              <div className="otoiawase_bottom_inner">
                <div className="otoiawase_bottom_left">まずは無料でお問い合わせしてみませんか？</div>
                <a href="#contact"><div className="otoiawase_bottom_right">お問い合わせはこちら</div></a>
              </div>
            </div>
    </div>


        </React.Fragment>
    )
}

export default Top;
