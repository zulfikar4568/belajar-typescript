import { isBefore, isAfter } from "date-fns";
import assert from "assert";
import { Plan } from './types';

namespace Chapter10BeforeRefactoring {
  function calculateServiceCost(plan: Plan, quantity: number, date: Date) {
    if (!isBefore(date, plan.summerStart) && !isAfter(date, plan.summerEnd)) {
      return quantity * plan.summerRate;
    } else {
      return quantity * plan.regularRate + plan.regularServiceCharge;
    }
  }
}