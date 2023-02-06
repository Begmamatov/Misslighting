import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import {useRoute} from '@react-navigation/native';
import {COLORS} from '../../../../constants/colors';
import requests from '@api/requests';
import AllProductTitle from '@components/uikit/AllProductTitle';
import SubCatalogListItem from './SubCatalogListItem';
import LoadingModal from '@components/uikit/LoadingModal/LoadingModal';

const Subcategory = () => {
  const route: any = useRoute();
  const [details, setDetails] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);

  const effect = async () => {
    try {
      setLoading(true);
      let res = await requests.categories.getSubCategories(
        route.params?.id as any,
      );
      setDetails(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    effect();
  }, []);

  let title = route.params?.name;

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingModal />
      ) : (
        <FlatList
          ListHeaderComponent={
            <>
              <GoBackHeader />
              <AllProductTitle title={title} />
            </>
          }
          data={details}
          renderItem={props => (
            <SubCatalogListItem props={props} id={route.params?.id} />
          )}
          keyExtractor={(item: any) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapperStyle}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        />
      )}
    </View>
  );
};

export default Subcategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.tabBgColor,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  columnWrapperStyle: {
    // justifyContent: 'space-between',
    marginBottom: 15,
  },
});
