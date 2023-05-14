import { isBefore, isAfter } from "date-fns";
import assert from "assert";
import { Plan } from './types';

namespace Chapter10AfterRefactoring {
  function calculateServiceCost(plan: Plan, quantity: number, date: Date) {
    return isSummer() ? summerCharge() : regularCharge();

    function isSummer() {
      return !isBefore(date, plan.summerStart) && !isAfter(date, plan.summerEnd);
    }

    function summerCharge() {
      return quantity * plan.summerRate;
    }

    function regularCharge() {
      return quantity * plan.regularRate + plan.regularServiceCharge;
    }
  }
}