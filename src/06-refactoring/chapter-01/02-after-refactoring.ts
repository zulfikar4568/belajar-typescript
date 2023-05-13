import { createStatementData } from "./create-statement-data";
import { Invoice, Plays, StatementData } from "./types";
import fs from 'fs/promises';
import plays from './plays.json';
import invoices from './invoices.json';

export namespace Chapter01AfterRefactoring {
  export function executeStatement() {
    console.log(statement(invoices, plays));
  }

  function usd(value: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(value / 100);
  }
  
  export function statement(invoice: Invoice, plays: Plays) {
    return renderPlainText(createStatementData(invoice, plays));
  }
  
  export function htmlStatement(invoice: Invoice, plays: Plays) {
    const content = renderHTML(createStatementData(invoice, plays));
    fs.writeFile('./html-statement.html', content);
    return content;
  }
  
  function renderHTML(data: StatementData) {
    let result = `<h1>Statement for ${data.customer}</h1>\n`;
    result += '<table>\n';
    result += '<tr><th>play</th><th>seats</th><th>cost</th></tr>\n';
    for (let perf of data.performances) {
        result += ` <tr><th>${perf.play.name}</th><th>${perf.audience}</th><th>${usd(perf.amount)}</th></tr>\n`;
    }
    result += '</table>\n';
    result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>`;
    result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>`;
    return result;
  }
  
  function renderPlainText(data: StatementData) {
    let result = `Statement for ${data.customer}\n`;
  
      for (let perf of data.performances) {
          result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
      }
  
      result += `Amount owed is ${usd(data.totalAmount)}\n`;
      result += `You earned ${data.totalVolumeCredits} credits\n`;
      return result;
  }
}

// import { Chapter01AfterRefactoring } from "./06-refactoring/chapter-01/02-after-refactoring";

// Chapter01AfterRefactoring.executeStatement();