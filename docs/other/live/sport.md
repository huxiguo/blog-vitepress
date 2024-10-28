# 运动打卡

<script setup>
import { ref } from 'vue'

const records = [
  {
    date: '2024-10-28',
    image: '/img/live/running/20241028.jpg'
  },
  // 可以继续添加更多记录
]
</script>

<div :class="$style.runningRecords">
  <div v-for="record in records" :key="record.date" :class="$style.recordCard">
    <div :class="$style.recordDate">{{ record.date }}</div>
    <div :class="$style.recordImage">
      <img :src="record.image" :alt="record.date + '运动记录'">
    </div>
  </div>
</div>

<style module>
.runningRecords {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.recordCard {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  max-width: 100%;
  width: 300px
}

.recordCard:hover {
  transform: translateY(-4px);
}

.recordImage {
  width: 300px;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
}

.recordImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recordInfo {
  padding: 16px;
}

.recordDate {
  font-size: 1.1em;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.recordStats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.stat {
  text-align: center;
}

.statValue {
  font-size: 1.2em;
  font-weight: 600;
  color: #2196f3;
}

.statLabel {
  font-size: 0.9em;
  color: #666;
  margin-top: 4px;
}

@media (max-width: 640px) {
  .recordStats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
