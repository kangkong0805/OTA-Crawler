export const payload = (idx: number, stayType: string) => {
  return [
    {
      operationName: "getPlacesList",
      variables: {
        useReverseGeocode: true,
        input: {
          query: stayType,
          start: 50 * idx + 1, // page에 띄울 첫 item index(50 * n + 1)
          display: 50, // page당 item 개수
          adult: false,
          spq: false,
          queryRank: "",
          x: "126.8757585",
          y: "37.4930433",
          deviceType: "pcmap",
        },
        isNmap: false,
        isBounds: true,
        reverseGeocodingInput: {
          x: "126.8757585",
          y: "37.4930433",
        },
      },
      query:
        "query getPlacesList($input: PlacesInput, $isNmap: Boolean!, $isBounds: Boolean!, $reverseGeocodingInput: ReverseGeocodingInput, $useReverseGeocode: Boolean = false) {\n  businesses: places(input: $input) {\n    total\n    items {\n      id\n      name\n      normalizedName\n      category\n      detailCid {\n        c0\n        c1\n        c2\n        c3\n        __typename\n      }\n      categoryCodeList\n      dbType\n      distance\n      roadAddress\n      address\n      fullAddress\n      commonAddress\n      bookingUrl\n      phone\n      virtualPhone\n      businessHours\n      daysOff\n      imageUrl\n      imageCount\n      x\n      y\n      poiInfo {\n        polyline {\n          shapeKey {\n            id\n            name\n            version\n            __typename\n          }\n          boundary {\n            minX\n            minY\n            maxX\n            maxY\n            __typename\n          }\n          details {\n            totalDistance\n            arrivalAddress\n            departureAddress\n            __typename\n          }\n          __typename\n        }\n        polygon {\n          shapeKey {\n            id\n            name\n            version\n            __typename\n          }\n          boundary {\n            minX\n            minY\n            maxX\n            maxY\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      subwayId\n      markerId @include(if: $isNmap)\n      markerLabel @include(if: $isNmap) {\n        text\n        style\n        stylePreset\n        __typename\n      }\n      imageMarker @include(if: $isNmap) {\n        marker\n        markerSelected\n        __typename\n      }\n      oilPrice @include(if: $isNmap) {\n        gasoline\n        diesel\n        lpg\n        __typename\n      }\n      isPublicGas\n      isDelivery\n      isTableOrder\n      isPreOrder\n      isTakeOut\n      isCvsDelivery\n      hasBooking\n      naverBookingCategory\n      bookingDisplayName\n      bookingBusinessId\n      bookingVisitId\n      bookingPickupId\n      easyOrder {\n        easyOrderId\n        easyOrderCid\n        businessHours {\n          weekday {\n            start\n            end\n            __typename\n          }\n          weekend {\n            start\n            end\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      baemin {\n        businessHours {\n          deliveryTime {\n            start\n            end\n            __typename\n          }\n          closeDate {\n            start\n            end\n            __typename\n          }\n          temporaryCloseDate {\n            start\n            end\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      yogiyo {\n        businessHours {\n          actualDeliveryTime {\n            start\n            end\n            __typename\n          }\n          bizHours {\n            start\n            end\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      isPollingStation\n      hasNPay\n      talktalkUrl\n      visitorReviewCount\n      visitorReviewScore\n      blogCafeReviewCount\n      bookingReviewCount\n      streetPanorama {\n        id\n        pan\n        tilt\n        lat\n        lon\n        __typename\n      }\n      naverBookingHubId\n      bookingHubUrl\n      bookingHubButtonName\n      newOpening\n      newBusinessHours {\n        status\n        description\n        dayOff\n        dayOffDescription\n        __typename\n      }\n      coupon {\n        total\n        promotions {\n          promotionSeq\n          couponSeq\n          conditionType\n          image {\n            url\n            __typename\n          }\n          title\n          description\n          type\n          couponUseType\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    optionsForMap @include(if: $isBounds) {\n      ...OptionsForMap\n      displayCorrectAnswer\n      correctAnswerPlaceId\n      __typename\n    }\n    searchGuide {\n      queryResults {\n        regions {\n          displayTitle\n          query\n          region {\n            rcode\n            __typename\n          }\n          __typename\n        }\n        isBusinessName\n        __typename\n      }\n      queryIndex\n      types\n      __typename\n    }\n    queryString\n    siteSort\n    __typename\n  }\n  reverseGeocodingAddr(input: $reverseGeocodingInput) @include(if: $useReverseGeocode) {\n    ...ReverseGeocodingAddr\n    __typename\n  }\n}\n\nfragment OptionsForMap on OptionsForMap {\n  maxZoom\n  minZoom\n  includeMyLocation\n  maxIncludePoiCount\n  center\n  spotId\n  keepMapBounds\n  __typename\n}\n\nfragment ReverseGeocodingAddr on ReverseGeocodingResult {\n  rcode\n  region\n  __typename\n}\n",
    },
    {
      operationName: "getAdBusinessList",
      variables: {
        input: {
          query: stayType,
          start: idx + 1, // page index
          localQueryString:
            "pr=place_pcmap&version=2.0.0&st=poi&q_enc=utf-8&r_enc=utf-8&sm=all.basic.trade_query.deepmatch.use_quasar_cid.force_match_keyword.force_use_center_coord&r_format=json&r_psglen=title.140&so=rel.dsc&hl=none&ic=basic&rp=none&r_query_info=1&start=1&display=50&q=%ED%98%B8%ED%85%94&q_center_coordinate=126.8757585%3B37.4930433&r_query_select=1&eq_property=adult",
          deviceType: "pcmap",
          siteSort: "rel.dsc",
          businessType: "place",
          x: "126.8757585",
          y: "37.4930433",
        },
        isNmap: false,
      },
      query:
        "query getAdBusinessList($input: AdBusinessesInput, $isNmap: Boolean!) {\n  adBusinesses(input: $input) {\n    total\n    isExpandedType\n    ... on RestaurantAdsResult {\n      items {\n        ...RestaurantAdItemFields\n        __typename\n      }\n      __typename\n    }\n    ... on HospitalAdsResult {\n      items {\n        ...HospitalAdItemFields\n        __typename\n      }\n      __typename\n    }\n    ... on PlaceAdsResult {\n      items {\n        ...PlaceAdItemFields\n        __typename\n      }\n      __typename\n    }\n    ... on AttractionAdsResult {\n      items {\n        ...AttractionAdItemFields\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment RestaurantAdItemFields on RestaurantAdSummary {\n  adId\n  adClickLog {\n    clickUrl\n    smartOrderClickUrl\n    trackingParameters {\n      n_ad_group_type\n      n_query\n      __typename\n    }\n    __typename\n  }\n  impressionEventUrl\n  effectiveImpressionEventUrl\n  adDescription\n  id\n  dbType\n  name\n  businessCategory\n  category\n  description\n  hasBooking\n  hasNPay\n  x\n  y\n  distance\n  imageUrl\n  imageCount\n  phone\n  virtualPhone\n  routeUrl\n  streetPanorama {\n    id\n    pan\n    tilt\n    lat\n    lon\n    __typename\n  }\n  roadAddress\n  address\n  commonAddress\n  blogCafeReviewCount\n  bookingReviewCount\n  totalReviewCount\n  bookingUrl\n  bookingBusinessId\n  talktalkUrl\n  detailCid {\n    c0\n    c1\n    c2\n    c3\n    __typename\n  }\n  options\n  promotionTitle\n  agencyId\n  businessHours\n  markerId @include(if: $isNmap)\n  markerLabel @include(if: $isNmap) {\n    text\n    style\n    __typename\n  }\n  imageMarker @include(if: $isNmap) {\n    marker\n    markerSelected\n    __typename\n  }\n  newBusinessHours {\n    status\n    description\n    dayOff\n    dayOffDescription\n    __typename\n  }\n  coupon {\n    total\n    promotions {\n      promotionSeq\n      couponSeq\n      conditionType\n      image {\n        url\n        __typename\n      }\n      title\n      description\n      type\n      couponUseType\n      __typename\n    }\n    __typename\n  }\n  imageUrls\n  bookingReviewScore\n  bookingHubUrl\n  bookingHubButtonName\n  microReview\n  tags\n  priceCategory\n  broadcastInfo {\n    program\n    date\n    menu\n    __typename\n  }\n  michelinGuide {\n    year\n    star\n    comment\n    url\n    hasGrade\n    isBib\n    alternateText\n    __typename\n  }\n  broadcasts {\n    program\n    menu\n    episode\n    broadcast_date\n    __typename\n  }\n  tvcastId\n  naverBookingCategory\n  saveCount\n  uniqueBroadcasts\n  isDelivery\n  isCvsDelivery\n  isTableOrder\n  isPreOrder\n  isTakeOut\n  bookingDisplayName\n  bookingVisitId\n  bookingPickupId\n  popularMenuImages {\n    name\n    price\n    bookingCount\n    menuUrl\n    menuListUrl\n    imageUrl\n    isPopular\n    usePanoramaImage\n    __typename\n  }\n  visitorReviewCount\n  visitorReviewScore\n  newOpening\n  __typename\n}\n\nfragment HospitalAdItemFields on HospitalAdSummary {\n  adId\n  adClickLog {\n    clickUrl\n    smartOrderClickUrl\n    trackingParameters {\n      n_ad_group_type\n      n_query\n      __typename\n    }\n    __typename\n  }\n  impressionEventUrl\n  effectiveImpressionEventUrl\n  adDescription\n  id\n  dbType\n  name\n  businessCategory\n  category\n  description\n  hasBooking\n  hasNPay\n  x\n  y\n  distance\n  imageUrl\n  imageCount\n  phone\n  virtualPhone\n  routeUrl\n  streetPanorama {\n    id\n    pan\n    tilt\n    lat\n    lon\n    __typename\n  }\n  roadAddress\n  address\n  commonAddress\n  blogCafeReviewCount\n  bookingReviewCount\n  totalReviewCount\n  bookingUrl\n  bookingBusinessId\n  talktalkUrl\n  detailCid {\n    c0\n    c1\n    c2\n    c3\n    __typename\n  }\n  options\n  promotionTitle\n  agencyId\n  businessHours\n  markerId @include(if: $isNmap)\n  markerLabel @include(if: $isNmap) {\n    text\n    style\n    __typename\n  }\n  imageMarker @include(if: $isNmap) {\n    marker\n    markerSelected\n    __typename\n  }\n  newBusinessHours {\n    status\n    description\n    dayOff\n    dayOffDescription\n    __typename\n  }\n  coupon {\n    total\n    promotions {\n      promotionSeq\n      couponSeq\n      conditionType\n      image {\n        url\n        __typename\n      }\n      title\n      description\n      type\n      couponUseType\n      __typename\n    }\n    __typename\n  }\n  medicalNo\n  visitorReviewCount\n  visitorReviewScore\n  talktalkUrl\n  fullAddress\n  apolloCacheId\n  hiraSpecialists {\n    name\n    count\n    __typename\n  }\n  __typename\n}\n\nfragment PlaceAdItemFields on PlaceAdSummary {\n  adId\n  adClickLog {\n    clickUrl\n    smartOrderClickUrl\n    trackingParameters {\n      n_ad_group_type\n      n_query\n      __typename\n    }\n    __typename\n  }\n  impressionEventUrl\n  effectiveImpressionEventUrl\n  adDescription\n  id\n  dbType\n  name\n  businessCategory\n  category\n  description\n  hasBooking\n  hasNPay\n  x\n  y\n  distance\n  imageUrl\n  imageCount\n  phone\n  virtualPhone\n  routeUrl\n  streetPanorama {\n    id\n    pan\n    tilt\n    lat\n    lon\n    __typename\n  }\n  roadAddress\n  address\n  commonAddress\n  blogCafeReviewCount\n  bookingReviewCount\n  totalReviewCount\n  bookingUrl\n  bookingBusinessId\n  talktalkUrl\n  detailCid {\n    c0\n    c1\n    c2\n    c3\n    __typename\n  }\n  options\n  promotionTitle\n  agencyId\n  businessHours\n  markerId @include(if: $isNmap)\n  markerLabel @include(if: $isNmap) {\n    text\n    style\n    __typename\n  }\n  imageMarker @include(if: $isNmap) {\n    marker\n    markerSelected\n    __typename\n  }\n  newBusinessHours {\n    status\n    description\n    dayOff\n    dayOffDescription\n    __typename\n  }\n  coupon {\n    total\n    promotions {\n      promotionSeq\n      couponSeq\n      conditionType\n      image {\n        url\n        __typename\n      }\n      title\n      description\n      type\n      couponUseType\n      __typename\n    }\n    __typename\n  }\n  medicalNo\n  normalizedName\n  categoryCodeList\n  daysOff\n  poiInfo {\n    polyline {\n      shapeKey {\n        id\n        name\n        version\n        __typename\n      }\n      boundary {\n        minX\n        minY\n        maxX\n        maxY\n        __typename\n      }\n      details {\n        totalDistance\n        arrivalAddress\n        departureAddress\n        __typename\n      }\n      __typename\n    }\n    polygon {\n      shapeKey {\n        id\n        name\n        version\n        __typename\n      }\n      boundary {\n        minX\n        minY\n        maxX\n        maxY\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  subwayId\n  oilPrice @include(if: $isNmap) {\n    gasoline\n    diesel\n    lpg\n    __typename\n  }\n  isPublicGas\n  isDelivery\n  isTableOrder\n  isPreOrder\n  isTakeOut\n  isCvsDelivery\n  naverBookingCategory\n  bookingDisplayName\n  bookingVisitId\n  bookingPickupId\n  easyOrder {\n    easyOrderId\n    easyOrderCid\n    businessHours {\n      weekday {\n        start\n        end\n        __typename\n      }\n      weekend {\n        start\n        end\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  baemin {\n    businessHours {\n      deliveryTime {\n        start\n        end\n        __typename\n      }\n      closeDate {\n        start\n        end\n        __typename\n      }\n      temporaryCloseDate {\n        start\n        end\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  yogiyo {\n    businessHours {\n      actualDeliveryTime {\n        start\n        end\n        __typename\n      }\n      bizHours {\n        start\n        end\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  isPollingStation\n  visitorReviewCount\n  visitorReviewScore\n  naverBookingHubId\n  bookingHubUrl\n  bookingHubButtonName\n  newOpening\n  fullAddress\n  __typename\n}\n\nfragment AttractionAdItemFields on AttractionAdSummary {\n  adId\n  adClickLog {\n    clickUrl\n    smartOrderClickUrl\n    trackingParameters {\n      n_ad_group_type\n      n_query\n      __typename\n    }\n    __typename\n  }\n  impressionEventUrl\n  effectiveImpressionEventUrl\n  adDescription\n  id\n  dbType\n  name\n  businessCategory\n  category\n  description\n  hasBooking\n  hasNPay\n  x\n  y\n  distance\n  imageUrl\n  imageCount\n  phone\n  virtualPhone\n  routeUrl\n  streetPanorama {\n    id\n    pan\n    tilt\n    lat\n    lon\n    __typename\n  }\n  roadAddress\n  address\n  commonAddress\n  blogCafeReviewCount\n  bookingReviewCount\n  totalReviewCount\n  bookingUrl\n  bookingBusinessId\n  talktalkUrl\n  detailCid {\n    c0\n    c1\n    c2\n    c3\n    __typename\n  }\n  options\n  promotionTitle\n  agencyId\n  businessHours\n  markerId @include(if: $isNmap)\n  markerLabel @include(if: $isNmap) {\n    text\n    style\n    __typename\n  }\n  imageMarker @include(if: $isNmap) {\n    marker\n    markerSelected\n    __typename\n  }\n  newBusinessHours {\n    status\n    description\n    dayOff\n    dayOffDescription\n    __typename\n  }\n  coupon {\n    total\n    promotions {\n      promotionSeq\n      couponSeq\n      conditionType\n      image {\n        url\n        __typename\n      }\n      title\n      description\n      type\n      couponUseType\n      __typename\n    }\n    __typename\n  }\n  cid\n  tags\n  visitorReviewCount\n  poiInfo {\n    polyline {\n      shapeKey {\n        id\n        __typename\n      }\n      __typename\n    }\n    polygon {\n      shapeKey {\n        id\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  isDelivery\n  isTakeOut\n  isPreOrder\n  isTableOrder\n  newOpening\n  __typename\n}\n",
    },
  ];
};