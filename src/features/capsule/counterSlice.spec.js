import capsuleReducer, {
  setItems,
  updatePage,
  viewCapsule,
  dimissCapsuleViewer,
  updateSortProperty,
  updateSearchPropery,
  updateSearchValue,
} from "./capsuleSlice";
import dummyCapsules from "../../data/testcapsules.json";

describe("counter reducer", () => {
  const initialState = {
    capsules: [],
    paginatedCapsules: [],
    status: "idle",
    order: "desc",
    page: 1,
    hasMore: true,
    sort: {
      id: "capsule_serial",
      name: "Capsule Serial",
    },
    searchValue: "",
    capsuleToView: undefined,
    searchPropery: {
      id: "capsule_serial",
      name: "Capsule Serial",
    },
  };

  it("should handle initial state", () => {
    expect(capsuleReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });  
  
  it("should handle update sort property state", () => {
    const actual = capsuleReducer(initialState, updateSortProperty({
      id: "capsule_serial",
      name: "Capsule Serial"
    }));
    expect(actual.sort).toEqual({
      id: "capsule_serial",
      name: "Capsule Serial"
    });
  });
  
  it("should handle update search property state", () => {
    const actual = capsuleReducer(initialState, updateSearchPropery({
      id: "capsule_serial",
      name: "Capsule Serial"
    }));
    expect(actual.searchPropery).toEqual({
      id: "capsule_serial",
      name: "Capsule Serial"
    });
  });
  
  it("should handle update search value state", () => {
    const actual = capsuleReducer(initialState, updateSearchValue("This is a dummy search"));
    expect(actual.searchValue).toEqual("This is a dummy search");
  });

  it("should handle setItems", () => {
    const actual = capsuleReducer(initialState, setItems(dummyCapsules));
    expect(actual.capsules).toEqual(dummyCapsules);
  });
  it("should handle updatePage", () => {
    //set the initial state to contain dummy
    const state1 = capsuleReducer(initialState, setItems(dummyCapsules));
    //load next items using the updatePage reducer
    const actual = capsuleReducer(state1, updatePage());
    expect(actual.paginatedCapsules.length).toEqual(9);
  });

  it("should handle viewCapsule", () => {
    //set the initial state to contain dummy
    const state1 = capsuleReducer(initialState, setItems(dummyCapsules));
    //select fourt capsule in the array to view
    const actual = capsuleReducer(
      state1,
      viewCapsule(state1.paginatedCapsules[3])
    );
    expect(actual.capsuleToView).toEqual({
      capsule_serial: "C104",
      capsule_id: "dragon1",
      status: "unknown",
      original_launch: "2013-03-01T19:10:00.000Z",
      original_launch_unix: 1362165000,
      missions: [
        {
          name: "CRS-2",
          flight: 10,
        },
      ],
      landings: 1,
      type: "Dragon 1.0",
      details: null,
      reuse_count: 0,
    });
  });
it("should handle dismissCapsule", () => {
    //set the initial state to contain dummy
    const state1 = capsuleReducer(initialState, setItems(dummyCapsules));
    //select fourt capsule in the array to view
    const state2 = capsuleReducer(
      state1,
      viewCapsule(state1.paginatedCapsules[3])
    );
    //dismiss the capsule
    const actual = capsuleReducer(
      state2,
      dimissCapsuleViewer()
    );
    expect(actual.capsuleToView).toEqual(undefined);
  });

  // it('should handle decrement', () => {
  //   const actual = counterReducer(initialState, decrement());
  //   expect(actual.value).toEqual(2);
  // });

  // it('should handle incrementByAmount', () => {
  //   const actual = counterReducer(initialState, incrementByAmount(2));
  //   expect(actual.value).toEqual(5);
  // });
});
