import capsuleReducer, {
  setItems,
  updatePage,
  viewCapsule,
  dimissCapsuleViewer,
  updateSortProperty,
  updateSearchPropery,
  updateSearchValue,
} from './capsuleSlice';
import dummyCapsules from '../../data/testcapsules.json'

describe('counter reducer', () => {
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
    capsuleToView:undefined,
    searchPropery: {
      id: "capsule_serial",
      name: "Capsule Serial",
    },
  };

  const testDataState = {
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
    capsuleToView:undefined,
    searchPropery: {
      id: "capsule_serial",
      name: "Capsule Serial",
    },
  };

  it('should handle initial state', () => {
    expect(capsuleReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setItems', () => {
    const actual = capsuleReducer(initialState, setItems(dummyCapsules));
    expect(actual.capsules).toEqual(dummyCapsules);
  });
  it('should handle updatePage', () => {
    const state1 = capsuleReducer(initialState, setItems(dummyCapsules));
    const actual = capsuleReducer(state1, updatePage());
    expect(actual.paginatedCapsules.length).toEqual(9);
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
