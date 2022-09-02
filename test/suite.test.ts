import { assert, describe, expect, it } from "vitest";
import { BroadcastChannel } from "worker_threads";
import { allure } from "../helpers";

const bc = new BroadcastChannel('allure');

describe("suite name", () => {
  it("foo", () => {
    expect(1 + 1).toEqual(2);
    expect(true).to.be.true;
  });
  it("bar", () => {
    console.log(typeof globalThis.__vitest_worker__.current.id)
    allure.label({value:"sdf",name:"test"})
    allure.link({url:"vk.com"})
    allure.owner("vovsy")

    assert.equal(Math.sqrt(4), 2);
  });

  it("snapshot", () => {
    expect({ foo: "bar" }).toMatchSnapshot();
  });
});
