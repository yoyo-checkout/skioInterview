<template>
  <ul class="cards__container">
    <li
      v-for="course in courses"
      :key="course.id"
      class="cards__item"
    >
      <div class="image-container">
        <img :src="course.image" :alt="course.title" class="image">
      </div>

      <div>
        <h3 class="title">
          {{ course.title }}
        </h3>
        <div class="lecturer-container">
          <span
            v-for="lecturer in course.lecturers"
            :key="lecturer.username"
            class="lecturer"
          >
            {{ lecturer.username }}
          </span>
        </div>
        <div class="info-container">
          <small class="feedback">{{ `評價：${course.feedback_score}%` }}</small>
          <small class="students">{{ `人數：${course.students}人` }}</small>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          id: 1,
          title: '工程師學理財 | 基金戰場投資指南 (預購中)',
          image: 'https://fakeimg.pl/230x138/',
          lecturers: [
            {
              username: 'Tony'
            }
          ],
          feedback_score: 100,
          students: 10
        },
        {
          id: 2,
          title: '工程師學理財 | 基金戰場投資指南 (預購中)',
          image: 'https://fakeimg.pl/230x138/',
          lecturers: [
            {
              username: 'Tony'
            }
          ],
          feedback_score: 100,
          students: 10
        },
        {
          id: 3,
          title: '工程師學理財 | 基金戰場投資指南 (預購中)',
          image: 'https://fakeimg.pl/230x138/',
          lecturers: [
            {
              username: 'Tony'
            }
          ],
          feedback_score: 100,
          students: 10
        },
        {
          id: 4,
          title: '工程師學理財 | 基金戰場投資指南 (預購中)',
          image: 'https://fakeimg.pl/230x138/',
          lecturers: [
            {
              username: 'Tony'
            }
          ],
          feedback_score: 100,
          students: 10
        },
        {
          id: 5,
          title: '工程師學理財 | 基金戰場投資指南 (預購中)',
          image: 'https://fakeimg.pl/230x138/',
          lecturers: [
            {
              username: 'Tony'
            }
          ],
          feedback_score: 100,
          students: 10
        },
        {
          id: 6,
          title: '工程師學理財 | 基金戰場投資指南 (預購中)',
          image: 'https://fakeimg.pl/230x138/',
          lecturers: [
            {
              username: 'Tony'
            }
          ],
          feedback_score: 100,
          students: 10
        },
        {
          id: 7,
          title: '工程師學理財 | 基金戰場投資指南 (預購中)',
          image: 'https://fakeimg.pl/230x138/',
          lecturers: [
            {
              username: 'Tony'
            }
          ],
          feedback_score: 100,
          students: 10
        },
        {
          id: 8,
          title: '工程師學理財 | 基金戰場投資指南 (預購中)',
          image: 'https://fakeimg.pl/230x138/',
          lecturers: [
            {
              username: 'Tony'
            }
          ],
          feedback_score: 100,
          students: 10
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .cards {
    &__container {
      display: flex;
      flex-flow: row wrap;
      margin: 0;
      padding: 0;
      width: 100%;
      list-style: none;
    }

    &__item {
      display: flex;
      margin: 0;
      padding: 1rem;
      width: 100%;
      border-radius: .5rem;
      cursor: pointer;

      &:hover {
        background-color: #f8f9fa;

        .image-container {
          .image {
            transform: scale(1.05);
          }
        }
      }

      .image-container {
        margin: 0 1rem 0 0;
        overflow: hidden;

        .image {
          width: 100%;
          height: 100%;
          transition: .2s;
        }
      }

      .title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 0 0 3rem;
      }

      .lecturer-container {
        margin: 0 0 .5rem;

        .lecturer {
          padding: 3px 5px;
          background-color: #8c939d;
          border-radius: 5px;
        }
      }

      .info-container {
        display: flex;
        flex-flow: row nowrap;

        .students {
          margin: 0 0 0 auto;
        }
      }

      @include rwd($device-tablet) {
        flex-flow: column;
        width: 25%;

        .image-container {
          margin: 0 0 1rem;
        }
      }
    }
  }
</style>
