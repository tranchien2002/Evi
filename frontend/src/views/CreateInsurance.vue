<template>
  <div id="main-content">
    <article id="post-210302" class="post-210302 page type-page status-publish hentry">
      <div class="entry-content">
        <div id="et-boc" class="et-boc">
          <div class="et_builder_inner_content et_pb_gutters3">
            <div class="et_pb_section et_pb_section_0 et_section_regular">
              <div class="et_pb_row et_pb_row_0" id="introduction">
                <div
                  class="et_pb_column et_pb_column_4_4 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough et-last-child"
                >
                  <div
                    class="et_pb_module et_pb_text et_pb_text_0 et_pb_bg_layout_dark et_pb_text_align_center"
                  >
                    <div class="et_pb_text_inner">
                      <h1>
                        <img src="@/assets/images/logo.png" alt="logo" title="logo" width="64" />
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="et_pb_row et_pb_row_1">
                <form-wizard
                  @on-complete="onComplete"
                  shape="circle"
                  color="#20a0ff"
                  error-color="#ff4949"
                >
                  <h3 slot="title" class="title-form">Insurance Details</h3>
                  <tab-content
                    title="Address"
                    icon="fas fa-map-marked"
                    :before-change="validateFirstStep"
                  >
                    <b-row>
                      <div class="col-12">
                        <el-form ref="validate1" :model="contractInsurance">
                          <el-form-item
                            label="Address Event:"
                            prop="address"
                            :rules="[{ required: true, message: 'Please enter address' }]"
                          >
                            <el-input
                              v-model="contractInsurance.address"
                              placeholder="Enter Address"
                            ></el-input>
                          </el-form-item>
                        </el-form>
                      </div>
                      <div class="col-12">
                        <b-embed
                          type="iframe"
                          aspect="16by9"
                          :class="`mapGoogle`"
                          :src="
                            `https://maps.google.com/maps?amp;hl=en&amp;q=${contractInsurance.address}+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed`
                          "
                        ></b-embed>
                      </div>
                    </b-row>
                  </tab-content>
                  <tab-content
                    title="Time"
                    icon="far fa-calendar-alt"
                    :before-change="validateSecondsStep"
                  >
                    <el-form ref="validate2" :model="contractInsurance">
                      <div>
                        <b-row>
                          <div class="col-12 col-md-4 time-choose">
                            <b-form-group label="Enter Date:" label-for="input" class="mx-auto">
                              <date-picker
                                v-model="contractInsurance.date"
                                tpye="date"
                                placeholder="Select date"
                                :disabled-date="notBeforeTenDay"
                                style="width:100%"
                                :class="!checkFrom2.date ? 'input__inner' : ''"
                                value-type="format"
                              />
                              <div
                                class="el-form-item__error col"
                                style="text-align: left"
                                v-if="!checkFrom2.date"
                              >Please enter date</div>
                            </b-form-group>
                          </div>
                          <div class="col-12 col-md-4 time-choose">
                            <b-form-group label="Enter Time Start:" label-for="input">
                              <date-picker
                                value-type="format"
                                v-model="contractInsurance.timeStart"
                                type="time"
                                placeholder="Select time start"
                                format="H"
                                style="width:100%"
                                :class="!checkFrom2.timeStart ? 'input__inner' : ''"
                              />
                              <div
                                class="el-form-item__error col"
                                style="text-align: left"
                                v-if="!checkFrom2.timeStart"
                              >Please enter time start</div>
                            </b-form-group>
                          </div>
                          <div class="col-12 col-md-4 time-choose">
                            <b-form-group label="Enter Time End:" label-for="input">
                              <date-picker
                                value-type="format"
                                v-model="contractInsurance.timeEnd"
                                type="time"
                                placeholder="Select time end"
                                format="H"
                                style="width:100%"
                                :disabled="!contractInsurance.timeStart"
                                :disabled-time="notBeforeStart"
                                :class="!checkFrom2.timeEnd ? 'input__inner' : ''"
                              />
                              <div
                                class="el-form-item__error col"
                                style="text-align: left"
                                v-if="!checkFrom2.timeEnd"
                              >Please enter time end</div>
                            </b-form-group>
                          </div>
                        </b-row>
                      </div>
                    </el-form>
                  </tab-content>
                  <tab-content title="Check Information" icon="fas fa-clipboard-check">
                    <div class="source">
                      <el-form ref="form" label-width="120px">
                        <el-form-item label="Address">
                          <b>{{ this.contractInsurance.address }}</b>
                        </el-form-item>
                        <el-form-item label="Date">
                          <b>{{ this.contractInsurance.date }}</b>
                        </el-form-item>
                        <el-form-item label="Time">
                          <div class="row">
                            <div class="col-2 text-left">
                              <b>{{ this.contractInsurance.timeStart }}h</b>
                            </div>
                            <el-col class="line" :span="2" style="color:white">-</el-col>
                            <div class="col-2 text-left">
                              <b>{{ this.contractInsurance.timeEnd }}h</b>
                            </div>
                          </div>
                        </el-form-item>
                        <el-form-item label="Price">
                          <b>{{ this.contractInsurance.price }}</b>
                        </el-form-item>
                        <el-form-item label="Compensation">
                          <b>{{ this.contractInsurance.compensation }}</b>
                        </el-form-item>
                      </el-form>
                    </div>
                  </tab-content>
                </form-wizard>
              </div>
            </div>
            <div class="et_pb_section et_pb_section_3 et_pb_fullwidth_section et_section_regular">
              <div class="et_pb_module et_pb_fullwidth_image et_pb_fullwidth_image_0">
                <img
                  data-cfsrc="@/assets/images/divider2.jpg"
                  srcset="@/assets/images/divider2.jpg         3000w, @/assets/images/divider2-254x15.jpg   254w, @/assets/images/divider2-533x31.jpg   533w, @/assets/images/divider2-1080x62.jpg 1080w"
                  sizes="(max-width: 3000px) 100vw, 3000px"
                  src="@/assets/images/divider2.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

const today = new Date();
const tenDay = today.setDate(today.getDate() + 9);
/* eslint-disable no-console */
export default {
  name: "create-insurance",
  data() {
    return {
      contractInsurance: {
        address: null,
        date: null,
        timeStart: null,
        timeEnd: null,
        price: null,
        compensation: null
      },
      checkFrom2: {
        date: true,
        timeStart: true,
        timeEnd: true
      }
    };
  },
  components: {
    FormWizard,
    TabContent,
    DatePicker
  },
  watch: {
    "contractInsurance.address": function() {
      this.saveLocalStorage();
    },
    "contractInsurance.date": function() {
      if (this.contractInsurance.date) {
        this.checkFrom2.date = true;
      } else {
        this.checkFrom2.date = false;
      }
      this.saveLocalStorage();
    },
    "contractInsurance.timeStart": function() {
      if (this.contractInsurance.timeStart) {
        this.checkFrom2.timeStart = true;
      } else {
        this.checkFrom2.timeStart = false;
      }
      this.saveLocalStorage();
    },
    "contractInsurance.timeEnd": function() {
      if (this.contractInsurance.timeEnd) {
        this.checkFrom2.timeEnd = true;
      } else {
        this.checkFrom2.timeEnd = false;
      }
      this.saveLocalStorage();
    }
  },
  methods: {
    onComplete: function() {
      localStorage.removeItem("contractInsurance");
    },
    notBeforeTenDay(date) {
      return date < tenDay;
    },
    notBeforeStart(date) {
      let timeStart = parseInt(this.contractInsurance.timeStart) + 1;
      return date.getHours() < timeStart;
    },
    validateFirstStep() {
      let check = false;
      this.$refs.validate1.validate(valid => {
        check = valid;
      });
      return check;
    },
    validateSecondsStep() {
      let check = true;
      if (!this.contractInsurance.date) {
        this.checkFrom2.date = false;
        check = false;
      }
      if (!this.contractInsurance.timeStart) {
        this.checkFrom2.timeStart = false;
        check = false;
      }
      if (!this.contractInsurance.timeEnd) {
        this.checkFrom2.timeEnd = false;
        check = false;
      }
      return check;
    },
    keyUpDate() {
      if (this.contractInsurance.date) {
        this.checkFrom2.date = true;
      }
      if (this.contractInsurance.timeEnd) {
        this.checkFrom2.timeEnd = true;
      }
      if (this.contractInsurance.timeStart) {
        this.checkFrom2.timeStart = true;
      }
    },
    checkPropertiesNull(obj) {
      for (var key in obj) {
        if (obj[key] !== null && obj[key] != "") return false;
      }
      return true;
    },
    saveLocalStorage() {
      localStorage.setItem(
        "contractInsurance",
        JSON.stringify(this.contractInsurance)
      );
      console.log(JSON.stringify(this.contractInsurance));
    }
  },
  created() {
    if (this.checkPropertiesNull(this.contractInsurance)) {
      this.contractInsurance = JSON.parse(
        localStorage.getItem("contractInsurance")
      );
    }
  }
};
</script>

<style>
.source {
  width: 50%;
  margin: 0 auto;
}
.text-left {
  text-align: left;
}
.el-form-item .el-form-item__label {
  font-size: 1em;
  color: aliceblue;
  text-align: left;
}
.el-form-item b {
  font-size: 1.5em;
  color: aliceblue;
}

.vue-form-wizard .wizard-card-footer {
  padding: 20px;
}
span.stepTitle {
  color: aliceblue;
}
h3.title-form {
  color: aliceblue;
  font-family: "Apple Color Emoji";
  font-weight: bold;
}
div.form-group > label {
  color: aliceblue;
}
.el-form-item__label {
  color: aliceblue;
}

.et_pb_row_1.et_pb_row {
  padding-top: 40px !important;
  padding-top: 40px;
  margin-top: 25px !important;
}
.time-choose {
  text-align: center;
  margin-bottom: 25px;
}
.et_pb_section_0.et_pb_section {
  padding-bottom: 300px;
}
.wizard-footer-left,
.wizard-footer-right {
  width: 50%;
}
.wizard-footer-right {
  text-align: right;
}

.input__inner > .mx-input-wrapper > .mx-input {
  border-color: #f56c6c;
}
</style>
