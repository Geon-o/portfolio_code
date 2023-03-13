<template>
  <div>
    <header-form @onClick="scrollMove"/>
    <v-container class="firstArea">
      <h1 class="typingText">
        <vue-typer
            class="vue-typer"
            text="안녕하세요!🖐
우아한 코드를 설계하기 위해
노력하는 백엔드 개발자 진건오입니다."
            :repeat='0'
            initial-action='typing'
            :pre-type-delay='500'
            :type-delay='100'
            :erase-on-complete='false'
            caret-animation='blink'
        ></vue-typer>
      </h1>

    </v-container>
    <v-sheet id="about" class="secondArea anti-drag" data-aos-duration="1000" data-aos="fade-up">
      <h1 align="center" class="areaTitle">ABOUT ME</h1>
      <v-container class="secondArea_in_content">
        <v-layout>
          <v-card
              flat
              max-width="450"
              class="img_card_section"
          >
            <v-img sizes="100%" :src="require('@/assets/profileimg.png')">
            </v-img>
          </v-card>

          <div style="padding: 15px 0px 0px 50px" data-aos="fade-left" data-aos-duration="1200">
            <h3 style="font-size: 25px">안녕하세요!<br/> 새로운걸 도전하고 배움을 즐기는 신입 백엔드 개발자 진건오입니다.</h3>
            <br/>
            <h4>KH 정보교육원을 통해 국비교육을 들었고, 교육 과정에서 Java 언어를 배움으로써<br/>
              코드의 재사용성, 유지보수를 향상할 수 있었으며 spring boot를 사용하여<br/>
              비즈니스 로직 분리를 배움으로써 코드 가독성을 향상할 수 있었으며 의존성 또한 분리할 수 있었습니다.<br/><br/>
              또한 에자일 프로세스와 DDD을 프로젝트에 도입하면서 생산성을 높이며 빠른 시일 내에<br/> 프로젝트를 완성할 수 있었습니다.
            </h4>
            <br/><br/>
            <v-layout>
              <h2>Pursuit</h2>
              <h2 style="padding: 0px 0px 0px 10px">|</h2>
            </v-layout>
            <h4 style="margin-top: 10px;">개발 공부를 하는 도중 로버트 마틴의 책 '클린코드'에서<br/>
              가독성과 재사용성이 높으며, 유지보수가 쉬운 코드의 의미를 가진 우아한 코드라는 문구에 꽃히게 되면서<br/>
              항상 코드 설계 시 중복되는 코드없이 효율적인 코드를 작성하도록 고민하고 노력합니다.
            </h4>
            <div align="end" style="margin-top: 55px;" class="introduce">
              <v-dialog
                  @click:outside="outside_click"
                  v-model="dialogValue"
                  persistent
                  max-width="800px"
                  :retain-focus="false"
              >
                <template v-slot:activator="{on, attrs}">
                  <v-btn style="font-weight: bolder" elevation="0" rounded v-bind="attrs" v-on="on">
                    <v-icon>mdi-chevron-left</v-icon>
                    <span style="color: darkcyan">Read more</span>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </template>

                <v-card height="auto" style="border-radius: 30px">
                  <div style="padding: 20px 0px 20px 20px; background-color: lightsteelblue">
                    <h2>📝Read More</h2>
                  </div>
                  <v-divider></v-divider>
                  <v-container style="width: 740px; padding: 50px 0px 0px 0px">
                    <h2 style="margin-bottom: 20px;">🏷️Cover Letter</h2>
                    <v-card height="auto" flat>
                      <v-expansion-panels flat hover>
                        <v-expansion-panel>
                          <v-expansion-panel-header style="background-color: gainsboro">
                            <h3>Q. 왜 개발자를 선택하였는가?</h3>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <h4 style="padding-top: 20px">
                              A.<br/>
                              저는 빌즈라는 레스토랑에서 조리파트를 담당했습니다.<br/>
                              조리 일을 하면서 손 끝에서 나오는 작은 세부사항 하나하나가 전체적인 결과물에 큰 영향을 준다는 것을 배웠고, 또 동료들간의 소통 또한 영향이 있다라는 것을
                              경험했습니다.<br/><br/>
                              하지만 조리라는 업무 특성상 불규칙한 스케줄 업무가 대부분이였고, 신체적인 피로감도 훨씬 커 시간이 지날수록 점점 제 자신이 도태되어가고 우물 안 개구리가 된
                              느낌을
                              받았습니다.<br/>
                              그러던와중 여러 매채에서 IT 기술들이 여러 직종에 접목되는것을 보게되었고 또한 요리라는 직종에도 접목이되고 여러 직종에 파고들어가는 모습들을 심심치않게 볼 수
                              있었습니다.<br/>
                              개인에게 전문성을 갖추도록 요구하는 시대에서 개발이라는 직종이 매력적이게 다가왔었고 새로운 도전과 배움을 즐기는 저로써 개발자라는 길에 흥미를
                              느꼈습니다.<br/><br/>
                              개발자라는 직업을 갖기위해 '자바의 정석'과 인프런이라는 인터넷 강의 플랫폼을 통해 개발을 입문하게 되었고 습득한 기술을 더 활용하고 응용해보자하여 KH
                              정보교육원에서 애자일 프로세스,
                              프레임워크 활용 등 심화된 기술을 배울 수 있었고 습득한 지식과 기술을 바탕으로 각종 프로젝트를 진행하였으며 하나하나 완성될 때
                              정말 뿌듯하면서도 큰 성취감을 느낄 수 있었습니다.<br/><br/>
                              앞서 이전 직업에서 얻은 경험과 현재까지의 경험을 바탕으로 끊이없이 발전하는 개발자가 되고싶습니다.
                            </h4>
                          </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel style="margin-top: 30px;">
                          <v-expansion-panel-header style="background-color: gainsboro">
                            <h3>Q. 입사 후 이루고 싶은 목표와 목표를 이루기 위해 어떠한 노력을 할 것인가?</h3>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <h4 style="padding-top: 20px">
                              A.<br/>
                              급변하는 사회에 따라 꾸준히 성장하고 발전하여 유능한 백엔드 개발자가 되고싶습니다.<br/>
                              입사 초기 빠른 적응을 위해 직무에 대한 지식 습득과 업무의 대해 이해할 수 있도록 중요한 내용은 항상 메모하는 습관을 들여 수월하게 일처리를 할 수 있도록 할 것이며
                              더욱 성장하기 위해 남는시간을 활용하여 현재 사용하는 spring boot나 Java, JPA 등을 온라인 강의 및 서적을 통해 더욱 깊게 공부할 것입니다.
                              또한 현재 필기만 취득했던 정보처리기사 자격증을 실기까지 합격할 것을 목적으로 취득 후 해당 직무에 전문성을 더하도록 할 것입니다.
                            </h4>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-card>

                    <h2 style="margin: 30px 0px 20px 0px;">🏷️Education</h2>
                    <v-timeline dense>
                      <v-timeline-item
                          v-for="(educationList, index) in educationLists"
                          :key="index"
                          small
                          light
                      >
                        <div class="mb-4">
                          <span style="font-size: 13px">{{ educationList.date }}</span>
                          <h4>{{ educationList.title }}</h4>
                        </div>
                      </v-timeline-item>
                    </v-timeline>
                    <h2 style="margin: 30px 0px 10px 0px">🏷️Certificate</h2>
                    <div style="padding: 0px 0px 50px 38px;">
                      <ul>
                        <li v-for="(certificate, index) in certificates" :key="index">
                          <h4>{{ certificate.name }}</h4>
                        </li>
                      </ul>
                    </div>
                  </v-container>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </v-layout>
      </v-container>
    </v-sheet>

    <v-sheet id="skills" class="thirdArea anti-drag">
      <h1 align="center" class="areaTitle">Skills</h1>
      <v-container>
        <v-layout justify-center>
          <v-card width="300px" height="500px" class="card_style" data-aos="flip-left" data-aos-duration="1000">
            <v-card-title class="justify-center skill_card_title">
              <v-icon>mdi-cog</v-icon>
              <h2 style="align-content: center">Back-End</h2>
            </v-card-title>
            <v-layout justify-center>
              <v-row style="margin-top: 50px" class="justify-center">
                <v-card flat v-for="backendImg in backEndImgs" :key="backendImg.name">
                  <v-img style="width: 130px; height: 130px"
                         :src="require(`@/assets/skillSet/${backendImg.name}`)"></v-img>
                </v-card>
              </v-row>
            </v-layout>
          </v-card>

          <v-card width="300px" height="500px" class="card_style" data-aos="flip-left" data-aos-duration="1900">
            <v-card-title class="justify-center skill_card_title">
              <v-icon>mdi-monitor</v-icon>
              <h2 style="align-content: center">Front-End</h2>
            </v-card-title>
            <v-layout justify-center>
              <v-row style="margin-top: 50px" class="justify-center">
                <div flat v-for="fronendImg in frontEndImgs" :key="fronendImg.name">
                  <v-img style="width: 130px; height: 130px"
                         :src="require(`@/assets/skillSet/${fronendImg.name}`)"></v-img>
                </div>
              </v-row>
            </v-layout>
          </v-card>

          <v-card width="300px" height="500px" class="card_style" data-aos="flip-left" data-aos-duration="2000">
            <v-card-title class="justify-center skill_card_title">
              <v-icon>mdi-tools</v-icon>
              <h2 style="align-content: center; font-size: 26px">Collaboration & Tools</h2>
            </v-card-title>

            <v-layout>
              <v-row style="margin-top: 30px" class="justify-center">
                <v-card flat>
                  <v-img style="max-width: 130px; max-height: 130px; margin-top: 20px;"
                         :src="require('@/assets/skillSet/intellij.png')"></v-img>
                </v-card>
                <v-card flat>
                  <v-img style="max-width: 130px; max-height: 130px;"
                         :src="require('@/assets/skillSet/notion.png')"></v-img>
                </v-card>
              </v-row>
            </v-layout>

            <v-layout justify-center>
              <v-card width="100" height="100" flat>
                <v-img style="max-width: 50px; max-height: 50px; margin: 13px 0px 0px 10px"
                       :src="require('@/assets/skillSet/slack.png')"></v-img>
              </v-card>
              <v-card width="100" height="100" flat style="margin-left: 12px">
                <v-img style="max-width: 80px; max-height: 80px; margin: 0px 0px 0px 20px"
                       :src="require('@/assets/githubicon.png')"></v-img>
              </v-card>
            </v-layout>

            <v-layout justify-center>
              <v-card width="100" height="100" flat>
                <v-img style="max-width: 50px; max-height: 50px; margin: 13px 0px 0px 10px"
                       :src="require('@/assets/skillSet/redis.png')"></v-img>
              </v-card>
              <v-card width="100" height="100" flat>
                <v-img style="max-width: 70px; max-height: 70px; margin: 0px 0px 0px 30px"
                       :src="require('@/assets/skillSet/docker.png')"></v-img>
              </v-card>
            </v-layout>
          </v-card>
        </v-layout>
      </v-container>
    </v-sheet>

    <v-sheet id="project" class="fourthArea anti-drag">
      <h1 align="center" class="areaTitle">Project</h1>
      <project-form/>
    </v-sheet>

    <v-sheet class="contact_area" id="contact">
      <contact-form/>
    </v-sheet>
  </div>
</template>

<script>
import ContactForm from "@/components/contact/ContactForm";
import HeaderForm from "@/components/header/HeaderForm";
import ProjectForm from "@/components/project/ProjectForm";

export default {
  name: 'PortFolio',
  components: {HeaderForm, ContactForm, ProjectForm},
  data() {
    return {
      backEndImgs: [
        {name: 'java.png'},
        {name: 'spring boot.png'},
        {name: 'jpa.png'},
        {name: 'mysql.png'},
      ],
      frontEndImgs: [
        {name: 'vue.png'},
        {name: 'vuetify.jpg'},
        {name: 'javascript.png'},
      ],
      toolsImgs: [
        {name: 'intellij.png'},
        {name: 'notion.png'},
        {name: 'slack.png'},
        {name: 'redis.png'},
        {name: 'docker.png'},
        {name: 'aws.png'},
      ],
      educationLists: [
        {date: "2012.03 ~ 2015.2", title: "방산고등학교 졸업"},
        {date: "2021.04 ~ 현재", title: "학점은행제 컴퓨터공학"},
        {date: "2022.05 ~ 2023.01", title: "에디 로봇 아카데미 웹/앱 개발 과정 4기 수료"},
      ],
      certificates: [
        {name: '정보처리기사 (필기)'},
        {name: '리눅스 마스터 2급'},
      ],
      dialogValue: false
    }
  },
  methods: {
    scrollMove(id) {
      document.getElementById(id).scrollIntoView({behavior: "smooth"})
    },
    outside_click() {
      this.dialogValue = false
    },
  }
}
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  .vue-typer >>> .custom.char.typed {
    color: white;
  }

  .secondArea {
    color: black;
    background-color: white;
    width: auto;
  }

  .img_card_section {
    background-color: white;
  }
}

@media (prefers-color-scheme: light) {
  .vue-typer >>> .custom.char.typed {
    color: black;
  }

  .secondArea {
    background-color: black;
    color: white;
  }

  .img_card_section {
    background-color: black;
  }
}
.typingText {
  font-size: 50px
}

.firstArea {
  width: 1400px;
  padding: 330px 0px 0px 0px;
  height: 780px;
}

.secondArea {
  height: 850px;
}

.thirdArea {
  height: 850px;
  background-color: aliceblue;
}

.fourthArea {
  height: auto;
  background-color: aliceblue;
}

.contact_area {
  height: auto;
  background-color: lightsteelblue;
}

.areaTitle {
  font-size: 40px;
  padding: 80px 0px 80px 0px;
}

.secondArea_in_content {
  width: 1300px;
}

.anti-drag {
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

.card_style {
  border-radius: 50px;
  margin-left: 30px;
}

.skill_card_title {
  padding: 60px 0px 0px 0px;
}

.introduce::-webkit-scrollbar {
  display: none;
}
</style>
