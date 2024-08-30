export async function GET(request, { params }) {

  const { productId } = params;

  // try {
  //   await Promise.all
  // } catch (error) {

  // }



  return Response.json({
    test: "test ok",
    productId: productId
  })
}