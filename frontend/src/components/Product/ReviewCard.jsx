import { Avatar, Box, Grid, Rating } from '@mui/material'
// import { StarIcon } from "@heroicons/react/20/solid";

function ReviewCard() {

    // const reviews = { href: "#", average: 4, totalCount: 117 };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
                    </Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg '>Ranjan</p>
                    <p className='opacity-75'>May 20, 2024</p>
                </div>
            </div>

            
            <div className="flex items-center">
            <Rating value={4.5} name='half-rating' readOnly precision={0.5} />
                  {/* <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>  */}
                  </div>
            <p>Nice Product, Must Buy </p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ReviewCard