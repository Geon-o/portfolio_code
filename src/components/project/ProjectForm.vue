<template>
  <v-sheet class="mx-auto"
           max-width="1200"
           style="background-color: aliceblue; padding-bottom: 80px"
  >
    <v-slide-group
        show-arrows
        v-model="model"
        class="pa-7"
    >
      <v-slide-item
          v-slot="{ toggle, selectedClass }"
      >
        <v-card
            color="grey-ligthen-1"
            :class="['ma-4', selectedClass]"
            height="auto"
            width="380"
            style="border-radius: 20px"
            @click="toggle"
        >
          <v-img :src="require('@/assets/project/bucket.png')"></v-img>
          <v-divider></v-divider>
          <div style="background-color: mintcream">
            <div class="pa-1">
              <v-chip v-for="(chipList, index) in chipLists" :key="index" outlined color="secondary" small
                      style="margin: 2px 0px 0px 5px">
                {{ chipList.name }}
              </v-chip>
            </div>
            <v-card-title>
              <h2>My Bucket</h2>
            </v-card-title>
            <v-card-subtitle>
              <h4>22.10.26 ~ 22.11.24</h4>
              <h4>개인프로젝트</h4>
            </v-card-subtitle>
          </div>
        </v-card>
      </v-slide-item>

      <v-slide-item
          v-slot="{ toggle, selectedClass }"
      >
        <v-card
            color="grey-ligthen-1"
            :class="['ma-4', selectedClass]"
            height="auto"
            width="380"
            style="border-radius: 20px"
            @click="toggle"
        >
          <v-img :src="require('@/assets/project/buydia_logo.png')" style="padding-top: 90px;" contain></v-img>
          <v-divider></v-divider>
          <div style="background-color: mintcream">
            <div class="pa-1">
              <v-chip v-for="(chipList, index) in chipLists" :key="index" outlined color="secondary" small
                      style="margin: 2px 0px 0px 5px">
                {{ chipList.name }}
              </v-chip>
            </div>
            <v-card-title>
              <h2>Buydia</h2>
            </v-card-title>
            <v-card-subtitle>
              <h4>22.11.28 ~ 23.01.26</h4>
              <h4>팀프로젝트</h4>
            </v-card-subtitle>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-card
          class="mx-auto"
          v-if="model != null"
          height="auto"
          width="1000"
          style="border-radius: 40px"
      >
        <div class=" fill-height" v-if="model == 0">
          <h1 style="padding: 20px 0px 20px 20px">My Bucket</h1>
          <v-divider></v-divider>
          <div style="margin: 20px 0px 20px 20px;">
            <h2 style="margin-bottom: 10px;">🧑‍💻프로젝트 소개</h2>

            <ul style="margin-left: 30px;">
              <li>
                <h3 class="project_list">기획</h3>
              </li>
              <div>
                <h4>첫 프로젝트인만큼 기본적이고, 학습한 것들을 응용하는 것을 기반으로<br/>
                  사용자들이 버킷리스트를 작성하고 서로 공유할 수 있는 커뮤니티 사이트입니다.</h4>
              </div>

              <li style="margin-top: 10px;">
                <h3 class="project_list">Github</h3>
              </li>
              <div>
                <h4>
                  <a href="https://github.com/Geon-o/WebAppPersonalProject/tree/main/p4th/GeonoJin"
                     style="text-decoration: none" target="_blank">
                    https://github.com/Geon-o/WebAppPersonalProject/tree/main/p4th/GeonoJin
                  </a>
                </h4>
              </div>

              <li style="margin-top: 10px">
                <h3 class="project_list">Notion</h3>
              </li>
              <div>
                <a href="https://quartz-lead-0f5.notion.site/BUCKET-LIST-e07c818ea0654d3e92579e0a5ef81772"
                   style="text-decoration: none" target="_blank"
                >
                  📒커뮤니티형 버킷리스트
                </a>
              </div>

              <li style="margin-top: 10px;">
                <h3 class="project_list">Youtube</h3>
                <iframe
                    width="660"
                    height="415"
                    src="https://www.youtube-nocookie.com/embed/c4-YB2nOgN0"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
              </li>
            </ul>
          </div>
          <v-divider></v-divider>
          <div style="margin: 20px 0px 20px 20px;">
            <h2 style="margin-bottom: 10px;">💻구현 내용</h2>

            <div style="margin: 20px 0px 20px 20px">
              <ul>
                <li>
                  <h4 class="project_list">회원관련 기능</h4>
                  <div>
                    <h4>
                      로그인, 회원가입, 회원정보 관리, 회원탈퇴 기능을 구현하였습니다.<br/>
                      회원가입 기능에서는 회원가입시 클라이언트가 입력한 이메일과 닉네임이 DB에 저장되어있는지<br/>
                      확인을 할 수 있는 중복체크 기능을 구현하였습니다.
                    </h4>
                  </div>
                </li>

                <li>
                  <h4 class="project_list" style="margin-top: 10px;">버킷리스트 CRUD</h4>
                  <div>
                    <h4>
                      메인작업으로 버킷리스트를 작성하고, 작성한 내용을 볼 수 있으며 수정과 삭제를 할 수 있도록하였습니다.<br/>
                      또한 JPA를 사용하여 해당 버킷리스트의 데이터를 가져올 때 트래픽 부하를 줄이고자 Pageable을 사용하여<br/>
                      페이지 네이션 작업을 하였고, 연관관계 조회시 fetch 타입을 LAZY로 설정하여 트래픽을 최소화하였습니다.
                    </h4>
                  </div>
                </li>

                <li>
                  <h4 class="project_list" style="margin-top: 10px;">검색기능</h4>
                  <div>
                    <h4>
                      검색 시 키워드를 입력하면 해당 키워드와 일치하는 버킷리스트를 보여주는 기능을 구현했습니다.
                      해당 기능은 JPA를 사용하여 containing 쿼리를 사용하여 구현하였습니다.
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <v-divider></v-divider>
          <div style="margin: 20px 0px 20px 20px;">
            <h2 style="margin-bottom: 10px;">💡느낀점</h2>

            <div style="padding: 20px 0px 30px 20px">
              <ul>
                <li>
                  <h4 class="project_list">시간계획의 중요성</h4>
                  <div>
                    <h4 style="color: lightslategrey">
                      한 달이라는 짧으면 짧고 길면 긴 시간이였지만 이번 프로젝트를 하면서 시간계획을 철저하게 계획하지 못해<br/>
                      구현하고 싶었던 기능을 다 구현하지 못해 큰 아쉬움이 남았습니다.<br/>
                      에자일 프로세스를 활용하여 효율적으로 작업하여 생산성을 높이려하였지만 익숙하지 못해 제대로 활용하지 못한것 같아<br/>
                      매우 아쉬웠고 다음 프로젝트에서는 작업의 우선순위를 체계적으로 두어 프로젝트의 완성도를 높여야겠다는 생각이 들었습니다.
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="fill-height" v-else-if="model == 1">
          <h1 style="padding: 20px 0px 20px 20px">BUYDIA</h1>
          <v-divider></v-divider>
          <div style="margin: 20px 0px 20px 20px;">
            <h2 style="margin-bottom: 10px;">🧑‍💻프로젝트 소개</h2>

            <ul style="margin-left: 30px;">
              <li>
                <h3 class="project_list">기획</h3>
              </li>
              <div>
                <h4>
                  최근 자기 자신을 브랜드화하는 퍼스널 브랜딩에 대한 관심이 증가하고있습니다.<br/>
                  1인 기업의 가치가 올라가고있는 현 시장 흐름에 맞추어 자기 자신의 전문성을 발휘하여<br/>
                  핸드메이드 상품, 직업 노하우, 개인의 취미/특기 등 모든 것을 상품화하여
                  판매할 수 있는 사이트를 기획하게 되었습니다.
                </h4>
              </div>

              <li style="margin-top: 10px;">
                <h3 class="project_list">Github</h3>
              </li>
              <div>
                <h4>
                  <a href="https://github.com/Geon-o/Eddi-T1"
                     style="text-decoration: none" target="_blank">
                    https://github.com/Geon-o/Eddi-T1
                  </a>
                </h4>
              </div>

              <li style="margin-top: 10px">
                <h3 class="project_list">Notion</h3>
              </li>
              <div>
                <a href="https://quartz-lead-0f5.notion.site/914c6a5565794f539985ebb777225a5e"
                   style="text-decoration: none" target="_blank"
                >
                  📦창작물 판매사이트
                </a>
              </div>

              <li style="margin-top: 10px;">
                <h3 class="project_list">Youtube</h3>
                <iframe
                    width="660"
                    height="415"
                    src="https://www.youtube-nocookie.com/embed/CRLs_h7noOk"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
              </li>
            </ul>
          </div>
          <v-divider></v-divider>
          <div style="margin: 20px 0px 20px 20px;">
            <h2 style="margin-bottom: 10px;">💻구현 내용</h2>

            <div style="margin: 20px 0px 20px 20px">
              <ul>
                <li>
                  <h4 class="project_list">Summary</h4>
                </li>
                <ul>
                  <li>
                    작성한 백로그 중 spring 20개, vue 96개, flutter 6개로 총 122개의 백로그를 작성하였고<br/>
                    각각 spring 21.5%, vue 47.5%, flutter 3.3% 기여하였으며 전체 479개의 백로그가 작성되었고<br/>
                    그 중 25.5% 기여했습니다.
                  </li>
                </ul>
              </ul>
              <ul>
                <li>
                  <h4 class="project_list">Spring</h4>
                  <ul>
                    <li>
                      <h4>장바구니 시스템</h4>
                    </li>
                    <div>
                      <ul>
                        <li>
                          사용자가 웹에서 상품을 장바구니에 넣을 시 장바구니 entity를 통해 DB에 저장되고,<br/>
                          저장된 상품은 장바구니 페이지에 보여지도록 하였습니다.
                        </li>
                        <li>
                          JPA를 통해 연관관계 설정 시 fetch Type을 LAZY로 설정하여 트래픽 부하를 줄였습니다.
                        </li>
                      </ul>
                    </div>
                    <li style="margin-top: 5px;">
                      <h4>장바구니 삭제 시스템</h4>
                    </li>

                    <li style="margin-top: 5px;">
                      <h4>회원관련 시스템</h4>
                      <ul>
                        <li style="margin-top: 5px;">
                          아이디 및 닉네임 중복확인 시스템
                        </li>
                        <li style="margin-top: 5px;">
                          회원탈퇴 시스템
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <h4 class="project_list" style="margin-top: 10px;">Vue</h4>
                  <ul>
                    <li>
                      <h4>메인페이지 UI</h4>
                    </li>
                    <div>
                      <ul>
                        <li>
                          carousel을 적용한 광고 및 이벤트 배너
                        </li>
                        <li>
                          간략히 볼 수 있는 카테고리별 상품 UI
                        </li>
                      </ul>
                    </div>
                    <li style="margin-top: 5px;">
                      <h4>Pagination</h4>
                      <ul>
                        <li>
                          스크롤 페이징을하기 위해 infinite-loding 라이브러리를 설치하였고<br/>
                          해당 데이터들은 Spring에서 JPA의 Pageable 기능을 활용하여 필요한 데이터만큼만 불러왔습니다.
                        </li>
                      </ul>
                    </li>

                    <li style="margin-top: 5px;">
                      <h4>일반회원 마이페이지</h4>
                      <ul>
                        <li style="margin-top: 5px;">
                          상품 후기 관련UI 및 시스템
                        </li>
                        <li style="margin-top: 5px;">
                          최근 본 상품 UI
                        </li>
                        <li style="margin-top: 5px;">
                          최근 주문 내역UI
                        </li>
                        <li style="margin-top: 5px;">
                          닉네임 변경UI 및 시스템
                        </li>
                        <li style="margin-top: 5px;">
                          회원탈퇴 UI 및 시스템
                        </li>
                        <li style="margin-top: 5px;">
                          마이페이지 내부 내비게이션 UI
                        </li>
                      </ul>
                    </li>

                    <li style="margin-top: 5px;">
                      <h4>판매자 마이페이지</h4>
                      <ul>
                        <li style="margin-top: 5px;">
                          업체 정보 등록 시스템
                        </li>
                        <li style="margin-top: 5px;">
                          업체 정보 출력 UI
                        </li>
                        <li style="margin-top: 5px;">
                          카카오 맵 API 적용
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <h4 class="project_list" style="margin-top: 10px;">Flutter</h4>
                  <div>
                    <ul>
                      <h4>
                        <li>
                          회원가입 시 사용자 목적에 맞게 선택할 수 있는UI
                        </li>
                      </h4>
                      <ul>
                        <li>
                          해당 서비스는 일반회원과 판매자회원을 구분하여 서비스를 제공하기에<br/>
                          회원가입시 사용자 목적에 맞게 회원가입할 수 있도록 페이지를 구분하여 서비스를 이용할 수 있게하였습니다.
                        </li>
                      </ul>
                      <h4>
                        <li>
                          판매자 및 일반회원 회원가입 UI 및 API
                        </li>
                        <li>
                          아이디 및 닉네임 중복 체크 UI 및 API
                        </li>
                      </h4>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <v-divider></v-divider>
          <div style="margin: 20px 0px 20px 20px;">
            <h2 style="margin-bottom: 10px;">💡느낀점</h2>

            <div style="padding: 20px 0px 30px 20px">
              <ul>
                <li>
                  <h4 class="project_list">협업의 중요성</h4>
                  <div>
                    <h4 style="color: lightslategrey">
                      개인 프로젝트 진행시 시간계획을 철저히하지 못해 기능을 모두 구현하지 못했었는데<br/>
                      이번 팀 프로젝트에서는 매일 15분씩 스트럼회의를 통해 프로젝트 진행 계획 또는 진행 상황, 이슈 등을
                      서로 공유함으로써<br/> 생산성을 높힐 수 있었으며 정해진 기간내에 프로젝트를 완성 할 수 있었습니다.<br/><br/>

                      또한 애자일 프로세스를 적극 활용하여 백로그 작성 시 git 커밋 제목과 일치시켜 현재 작업한 내용을
                      팀원이 알아볼 수 있도록하여<br/> 서로 원할한 소통이 가능하여 어렵지 않게 작업할 수 있었습니다.
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </v-card>
    </v-expand-transition>
  </v-sheet>
</template>

<script>

export default {
  name: "ProjectForm",
  data() {
    return {
      model: null,
      chipLists: [
        {name: "Java"},
        {name: "Spring boot"},
        {name: "JPA"},
        {name: "MySQL"},
        {name: "Vue.js"},
        {name: "Vuetify"},
        {name: "Redis"},
        {name: "Docker"},
      ],
    }
  }
}
</script>

<style scoped>
.project_list {
  font-size: 20px;
}
</style>