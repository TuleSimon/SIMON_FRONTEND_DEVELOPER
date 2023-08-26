import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import GetStartedSection from "./components/GetStartedSection.tsx";
import Navbar from "./components/Navbar";
import {
  dimissCapsuleViewer,
  getCapsuleToView,
  getOrder,
  getPaginatedCapsules,
  getSearchPropery,
  getSearchValue,
  getSort,
  getStatus,
  hasMore,
  searchItemsAsync,
  setItems,
  updatePage,
  updateSearchPropery,
  updateSearchValue,
  updateSortProperty,
  viewCapsule,
} from "./features/capsule/capsuleSlice";
import { useEffect, useMemo } from "react";
import CapsulesList from "./components/CapsulesList";
import capsulesKeys from "./data/capsulesKeys.json";
import { fetchCapsules } from "./features/capsule/capsuleApi";
import FilledButton from "./components/buttons/FilledButton";
import FilterDropDown from "./components/FilterDropDown";
import OutlinedTextField from "./components/OutlinedTextField";
import OutlinedButton from "./components/buttons/OutlinedButton";
import CapsuleViewer from "./components/CapsuleViewer";

function App() {
  const capsules = useSelector(getPaginatedCapsules);
  const hasMoreItems = useSelector(hasMore);
  const searchProperty = useSelector(getSearchPropery);
  const sortProperty = useSelector(getSort);
  const orderProperty = useSelector(getOrder);
  const loadingStatus = useSelector(getStatus);
  const capsuleToView = useSelector(getCapsuleToView);
  const dispatch = useDispatch();

  const searchValue = useSelector(getSearchValue);

  useEffect(() => {
    // ON INITIAL LOAD, FETCH CAPSULES FROM API IF NO CPASULES IS AVAILABLE
    fetchCapsules(sortProperty.id).then((caps) => dispatch(setItems(caps)));
  }, [sortProperty]);

  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}

      {useMemo(
        () =>
          capsuleToView && (
            <CapsuleViewer
              onDismiss={(e) => dispatch(dimissCapsuleViewer())}
              capsule={capsuleToView}
            />
          ),
        [capsuleToView]
      )}

      <section
        style={{ backgroundImage: "url('/backgrounds/hero.png')" }}
        className="bg-center bg-cover relative min-h-[30vh]"
      >
        <div className="flex flex-col container md:max-w-2xl py-[64px]">
          <p className="font-semibold text-[25px] md:text-[40px] boundless text-center mb-6">
            SPACEX API & FRONTEND TEST
          </p>
          <p className="text-[13px] md:text-[15px] font-light text-grey-100 text-center">
            Officia ut voluptate eu id. Duis cillum tempor sit esse aute.
            Consequat id dolore id sint anim elit ut proident fugiat
            exercitation consectetur dolore. Lorem excepteur incididunt duis
            velit id sint cillum sint duis adipisicing tempor. Ut laborum
            laboris et anim eiusmod ea duis fugiat Lorem quis. Eu quis voluptate
            eu elit excepteur. Mollit laborum dolore do quis deserunt.
          </p>
        </div>
      </section>

      <section className="bg-grey-700 w-full z-20 px-autoplace-items-center py-4 place-content-center">
        <div className="container  flex flex-col ">
          {/* SEARCH COMPONENTS */}
          {useMemo(
            () => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex flex-wrap smw:gap-2 z-30 gap-8 w-full"
              >
                <FilterDropDown
                  selectedValue={
                    searchProperty?.name ? searchProperty.name : "Capsule Id"
                  }
                  onSelected={(e) => dispatch(updateSearchPropery(e))}
                />
                <OutlinedTextField
                  placeholder={`Search capsules by ${searchProperty.name}`}
                  value={searchValue}
                  type={
                    searchProperty.id === "original_launch"
                      ? "datetime-local"
                      : "text"
                  }
                  onChange={(input) => dispatch(updateSearchValue(input))}
                  className="grow "
                />
                <button
                  disabled={loadingStatus === "loading"}
                  type="submit"
                  className="flex h-6/6 "
                  onClick={(e) =>
                    dispatch(
                      searchItemsAsync({
                        sort: sortProperty.id,
                        order: orderProperty,
                        searchProperty: searchProperty.id,
                        searchValue: searchValue,
                      })
                    )
                  }
                >
                  <FilledButton
                    disabled={loadingStatus === "loading"}
                    classNames="w-fit h-full px-4 min-w-[120px] py-2 "
                  >
                    {loadingStatus === "loading" ? "Loading" : "Search"}
                  </FilledButton>
                </button>
              </form>
            ),
            [searchValue, loadingStatus, searchProperty]
          )}

          {/* CHIPS COMPONENTS */}
          {useMemo(
            () => (
              <section className="flex gap-4 flex-col mt-8">
                <p className=" font-manRope xsw:text-[14px] text-[16px] text-grey-50 font-light ">
                  {"Sort Capsules By:"}
                </p>

                <section className="flex gap-4 flex-wrap">
                  {capsulesKeys.map((filter, index) => {
                    return (
                      <button
                        onClick={(e) => dispatch(updateSortProperty(filter))}
                        key={filter.id}
                      >
                        <OutlinedButton
                          classNames={` ${
                            sortProperty.id === filter.id
                              ? "bg-primary-hover border-primary-hover text-white font-bold"
                              : "text-text-action"
                          } text-xs px-2 py-2 min-w-[90px]`}
                        >
                          {filter.name}
                        </OutlinedButton>
                      </button>
                    );
                  })}
                </section>
              </section>
            ),
            [sortProperty]
          )}

          {/* WRAPPING LIST ITEM WITH USEMEMO TO PREVENT UNECESSARY RERENDERS */}
          {useMemo(
            () =>
              capsules && (
                <CapsulesList
                  onCapsuleClicked={(capsule) => dispatch(viewCapsule(capsule))}
                  capsules={capsules}
                />
              ),
            [capsules]
          )}

          {hasMoreItems && (
            <button className="mx-auto" onClick={(e) => dispatch(updatePage())}>
              <FilledButton> Load More </FilledButton>
            </button>
          )}
        </div>
      </section>

      <GetStartedSection />
    </main>
  );
}

export default App;
