(ns corp.design.button-story
  (:require
   goog.object

   [quo2.components.markdown.text :as text]
   [quo2.components.counter.counter :as counter]


   [reagent.core :as r]
   [reagent.core :as reagent]))




(defn update-obj! [obj field f & args]
  (let [old-val (goog.object/get obj field)
        new-val (apply f old-val args)]
    (goog.object/set obj field new-val)))

;;
;; When developing, storybook will attempt to use any `def` in this namespace
;; as a story. So make sure you only put _stories_ in this namespace; any
;; components, fixtures, etc. should be defined in a separate namespace.
;;
;; Once we've done a release build, we need to ensure that we preserve the names
;; that storybook expects, so we need to annotate each `def` with an `:export`
;; metadata.
;;
;; Other than those two caveats, everything works pretty seamlessly! Neat!
;;


(def ^:export default
  #js {:title "My Button"
       :component text/text})

(defn ^:export Text
  [args]
  (r/as-element [:<>
                 [text/text {:size :heading-1} "aa"]
                 [text/text {:size :paragraph-1} "aa"]]))

;; (update-obj! Text "args" "hello")

(defn ^:export Emoji
  []
  (r/as-element [:<>
                 [counter/counter {} 1]]))

